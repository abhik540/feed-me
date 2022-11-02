import { StyleSheet, View, Text, Alert } from "react-native";
import { useState, useEffect } from 'react';
import { Title } from "../components/ui/Title";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons"

interface GameScreenProps {
    userNumber: string;
    onGameOver: () => void;
}

const generateRandomBewteen: any = (min: number, max: number, exclued: number) => {
    const randomNum = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclued) {
        return generateRandomBewteen(min, max, exclued);
    }
    return randomNum;
};

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({
    userNumber,
    onGameOver
}: GameScreenProps) => {
    const initialGuess = generateRandomBewteen(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    const nextGuessNumber = (direction: string) => {
        if ((direction === 'lower' && currentGuess < userNumber) || direction === 'higher' && currentGuess > userNumber) {
            Alert.alert("Don't lie", 'You know that this is wrong..', [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBewteen(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
    };

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessNumber.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessNumber.bind(this, 'higher')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 35
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12,
        fontSize: 30
    }
});
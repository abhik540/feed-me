import { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { COLORS } from '../constants/Color';

interface StartGameScreenProps {
    onValidStart: (number: string) => void;
}

export const StartGameScreen = ({
    onValidStart
}: StartGameScreenProps) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const onReset = () => {
        setEnteredNumber('');
    };

    const onConfirm = () => {
        inputChangeHandler();
    };

    const inputHandler = (input: string) => {
        setEnteredNumber(input);
    };

    const inputChangeHandler = () => {
        const chooseNumber = parseInt(enteredNumber);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99', [{ text: 'Ok', style: 'destructive', onPress: onReset }]);
            return;
        }
        onValidStart(enteredNumber);
    };

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>
                    Enter a Number
                    <Text>Test</Text>
                </InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={inputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onReset}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: COLORS.accent500,
        borderBottomWidth: 2,
        color: COLORS.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});
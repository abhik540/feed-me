import { useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

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
        <View style={styles.inputContainer}>
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
                    <PrimaryButton title="Reset" onPress={onReset}></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton title="Confirm" onPress={onConfirm}></PrimaryButton>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center', // default will stretch
        padding: 16,
        backgroundColor: '#3b021f',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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
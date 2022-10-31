import { StyleSheet, View, TextInput } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";

interface StartGameScreenProps {
}

export const StartGameScreen = ({
}: StartGameScreenProps) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton title="Reset"></PrimaryButton>
            <PrimaryButton title="Confirm"></PrimaryButton>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: '#72063C',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    }
});
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/Color";

interface InstructionTextProps {
    children: any;
    style?: any;
}

export const InstructionText = ({
    children,
    style
}: InstructionTextProps) => {
    return (
        <Text style={[styles.instructionText, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: COLORS.accent500,
        fontSize: 24
    },
});
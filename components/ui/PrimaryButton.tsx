import { View, Text, Pressable, StyleSheet } from "react-native";
import { COLORS } from '../../constants/Color';

interface PrimaryButtonProps {
    children: any;
    onPress: () => void;
}

export const PrimaryButton = ({
    children,
    onPress
}: PrimaryButtonProps) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={() => onPress()}
                android_ripple={{ color: COLORS.primary600 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: COLORS.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});
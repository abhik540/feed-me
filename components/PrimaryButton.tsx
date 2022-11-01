import { View, Text, Pressable, StyleSheet } from "react-native";

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
}

export const PrimaryButton = ({
    title,
    onPress
}: PrimaryButtonProps) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={() => onPress()}
                android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{title}</Text>
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
        backgroundColor: '#72063c',
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
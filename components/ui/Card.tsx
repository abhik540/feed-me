import { StyleSheet, View } from "react-native";
import { COLORS } from "../../constants/Color";

interface CardProps {
    children: any;
}

export const Card = ({
    children
}: CardProps) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center', // default will stretch
        padding: 16,
        backgroundColor: COLORS.primary800,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});
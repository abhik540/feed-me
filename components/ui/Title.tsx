import { StyleSheet, Text } from "react-native";
import { COLORS } from '../../constants/Color';

interface TiteProps {
    children: any;
}

export const Title = ({
    children
}: TiteProps) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: COLORS.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: COLORS.white,
        padding: 12
    }
});
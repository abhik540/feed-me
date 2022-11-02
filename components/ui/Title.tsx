import { StyleSheet, Text } from "react-native";
import { COLORS } from '../../constants/Color';

interface TiteProps {
    title: string;
}

export const Title = ({
    title
}: TiteProps) => {
    return (
        <Text style={styles.title}>{title}</Text>
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
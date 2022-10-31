import { StyleSheet, View, Text, ListRenderItemInfo } from "react-native";

interface GoalItemProps {
    goal: ListRenderItemInfo<any>;
}

export const GoalItem = ({
    goal
}: GoalItemProps) => {
    return (
        <View style={styles.goalItem}>
        <Text>{goal.item.text}</Text>
    </View>);
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8
    },
    goalText: {
        color: 'white'
    }
});
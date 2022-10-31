import { StyleSheet, View, Text, ListRenderItemInfo, Pressable } from "react-native";

interface GoalItemProps {
    goal: ListRenderItemInfo<any>;
    removeItem: (id: string) => void;
}

export const GoalItem = ({
    goal,
    removeItem
}: GoalItemProps) => {

    const removeItemHandler = (id: any) => {
        removeItem(id);
    };
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#dddddd' }}
                onPress={removeItemHandler.bind(this, goal.item.id)}
                style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.goalText}>{goal.item.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'violent',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    }
});
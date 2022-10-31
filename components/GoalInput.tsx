import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';

interface GoalInputProps {
    addGoal: (arg: string) => void;
}

export const GoalInput = ({
    addGoal
}: GoalInputProps) => {

    const [goalText, setGoalText] = useState<string>('');

    const goalInputHandler = (input: string) => {
        setGoalText(input);
    };

    const addGoalHandler = () => {
        addGoal(goalText);
        setGoalText('');
    };
    
    return (
        <View style={styles.row}>
            <TextInput style={styles.column_1} placeholder='Your course goal' onChangeText={goalInputHandler} value={goalText} />
            <Button title="Add Goal" onPress={addGoalHandler} />
        </View>);
};

const styles = StyleSheet.create({
    root: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    column_1: {
        borderWidth: 1,
        width: '70%',
        margin: 2
    }
});
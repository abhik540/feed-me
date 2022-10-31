import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';

interface GoalInputProps {
    addGoal: (arg: string) => void;
    showModal: boolean;
    closeModal: () => void;
}

export const GoalInput = ({
    addGoal,
    showModal,
    closeModal
}: GoalInputProps) => {

    const [goalText, setGoalText] = useState<string>('');

    const goalInputHandler = (input: string) => {
        setGoalText(input);
    };

    const addGoalHandler = () => {
        addGoal(goalText);
        setGoalText('');
        closeModal();
    };

    return (
        <Modal visible={showModal} animationType="slide">
            <View style={styles.row}>
                <Image source={require('../assets/images/goal_2.png')} style={styles.image}></Image>
                <TextInput style={styles.column_1} placeholder='Your course goal' onChangeText={goalInputHandler} value={goalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={closeModal}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 24,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        backgroundColor: '#5e0acc',
    },
    column_1: {
        borderWidth: 1,
        width: '70%',
        marginRight: 0,
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 10
    },
    buttonContainer: {
        marginTop: 8,
        flexDirection: 'row'
    },
    image: {
        width: 100,
        height: 100,
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
});
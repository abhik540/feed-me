import { StyleSheet, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';

export default function App() {

  const [goalText, setGoalText] = useState<string>('');
  const [goals, setGoals] = useState<any[]>([]);

  const goalInputHandler = (input: string) => {
    setGoalText(input);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, { text: goalText, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <TextInput style={styles.column_1} placeholder='Your course goal' onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.flex_3}>
        <FlatList data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={item => {
            return (
              <GoalItem goal={item} />
            );
          }} alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

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
  },
  flex_3: {
    flex: 5,
  }
});
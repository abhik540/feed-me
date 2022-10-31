import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState<any[]>([]);

  const addGoalHandler = (input: string) => {
    setGoals((currentGoals) => [...currentGoals, { text: input, id: Math.random().toString() }]);
  };

  return (
    <View style={styles.root}>
      <GoalInput addGoal={addGoalHandler} />
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
  flex_3: {
    flex: 5,
  }
});
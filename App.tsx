import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { useState } from 'react';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState<any[]>([]);
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);

  const addGoalHandler = (input: string) => {
    setGoals((currentGoals) => [...currentGoals, { text: input, id: Math.random().toString() }]);
  };

  const openModal = () => {
    setModalVisibility(true);
  };

  const removeGoal = (id: string) => {
    setGoals((currentGoals: any[]) => {
      return (currentGoals.filter((goal) => goal.id !== id))
    });
  };

  return (
    <View style={styles.root}>
      <GoalInput
        addGoal={addGoalHandler}
        showModal={modalVisibility}
        closeModal={() => setModalVisibility(false)} />
      <View style={styles.flex_3}>
        <View style={styles.imageView}>
          <Image source={require('./assets/images/goal_2.png')} style={styles.image}></Image>
        </View>
        <Button title='Add New Goal' color="#5e0acc" onPress={openModal}></Button>
        <FlatList data={goals}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={item => {
            return (
              <GoalItem goal={item} removeItem={removeGoal} />
            );
          }} alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  flex_3: {
    flex: 5
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
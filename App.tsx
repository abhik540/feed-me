import { Button, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealOverviewScreen } from './screens/MealOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen
            name='welcome'
            component={CategoriesScreen}
            />
        </Drawer.Navigator> */}
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }} />
          <Stack.Screen
            name='MealsOverview'
            component={MealOverviewScreen}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
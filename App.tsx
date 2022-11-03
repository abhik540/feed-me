import { Button, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealOverviewScreen } from './screens/MealOverviewScreen';
import { MealDetailsScreen } from './screens/MealDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import { FavoriteScreen } from './screens/FavoriteScreen';
import { Provider } from 'react-redux';
import { store } from './store/redux/store'
// import FavoriteContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {
          backgroundColor: '#351401'
        },
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#e4baa1'
      }}>
      <Drawer.Screen
        name="Category"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }} />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }} />
    </Drawer.Navigator>
  );
};

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          {/* <BottomTab.Navigator>
          <BottomTab.Screen
            name='welcome'
            component={CategoriesScreen}
            />
        </BottomTab.Navigator> */}
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen
              name='MealsCategories'
              component={DrawerNavigator}
              options={{
                title: 'All Categories',
                headerShown: false
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
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
});
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from "./screens/Categories";
import Category from "./screens/Category";
import userScreen from './screens/UserScreen';
import cartScreen from './screens/Cartscreen';

const AppNavigator = createNativeStackNavigator();


const App = ({ navigation }) => {
  return (
    <AppNavigator.Navigator>
      <AppNavigator.Screen name='Categories' component={Categories} options={{ title: 'Home' }} />
      <AppNavigator.Screen name='Category' component={Category} />
      <AppNavigator.Screen name='Cart' component={cartScreen} />
      <AppNavigator.Screen name='User' component={userScreen} />
    </AppNavigator.Navigator>
  );
}
export { App };

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Category, Categories} />
      <Tab.Screen name='Cart' component={cartScreen} />
      <Tab.Screen name='User' component={userScreen} />
    </Tab.Navigator>
  );
}

export default Tabs;




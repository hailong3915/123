import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from "./screens/Categories";
import Category from "./screens/Category";

const AppNavigator = createNativeStackNavigator();


const App = ({ navigation }) => {
  return (
    <AppNavigator.Navigator>
      <AppNavigator.Screen name='Categories' component={Categories} options={{ title: 'Home' }} />
      <AppNavigator.Screen name='Category' component={Category} />
    </AppNavigator.Navigator>
  );
}

export default App;




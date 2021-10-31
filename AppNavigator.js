import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
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
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow

        }
      }}
    >
      <Tab.Screen name='Home' component={Categories} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635699924/home_wiaobr.png' }}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? `#000000` : `#a9a9a9`
              }}

            />
          </View>
        ),
      }} />
      <Tab.Screen name='Cart' component={cartScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635699925/shopping-cart_scuimp.png' }}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? `#000000` : `#a9a9a9`
              }}

            />
          </View>
        ),
      }} />

      <Tab.Screen name='User' component={userScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dsg1yo23i/image/upload/v1635699924/user_1_clbcf1.png' }}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? `#000000` : `#a9a9a9`
              }}

            />
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});









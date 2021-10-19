import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Categories from "../screens/Categories";
import userScreen from '../screens/UserScreen';
import cartScreen from '../screens/Cartscreen';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Categories} />
            <Tab.Screen name='Cart' component={cartScreen} />
            <Tab.Screen name='User' component={userScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;


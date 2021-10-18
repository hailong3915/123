import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import userScreen from '../screens/UserScreen';
import cartScreen from '../screens/Cartscreen';
import Categories from '../screens/Categories';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Categories} />
            <Tab.Screen name='Cart' component={cartScreen} />
            <Tab.Screen name='user' component={userScreen} />
        </Tab.Navigator>
    );
}


export default Tabs;
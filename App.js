import * as React from 'react';
import {
  StyleSheet
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import Tabs from "./Components/tabs";


const App1 = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
}

export default App1;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#f0f8ff`,
  }
});

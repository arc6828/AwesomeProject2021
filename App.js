import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import Welcome from './screens/Welcome';
// import Ex1 from './screens/Ex1';
// import Ex2 from './screens/Ex2';
// import Ex3 from './screens/Ex3';
// import Ex4 from './screens/Ex4';
// import Ex5 from './screens/Ex5';
// import Ex6 from './screens/Ex6';
// import Ex7 from './screens/Ex7';
// import Ex8 from './screens/Ex8';
// import Ex9 from './screens/Ex9';
// import Ex10 from './screens/Ex10';
// import Ex11 from './screens/Ex11';
// import Ex12 from './screens/Ex12';
// import Bmi from './screens/Bmi';
// import Item from './components/Item'
// import Network from './screens/Network'
// import NetworkCreate from './screens/NetworkCreate'

import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';

import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomTab /> */}
      <RootStack.Navigator initialRouteName="BottomTab">
        <RootStack.Screen 
            name="BottomTab" 
            component={BottomTab} 
            options={{  title: 'Main' , headerShown: false   }} 
            />

        <RootStack.Screen 
            name="SecondBottomTab" 
            component={SecondBottomTab} 
            options={{  title: 'Second Tab'   }} 
            />                               
          
      </RootStack.Navigator>

    </NavigationContainer>
  );
}
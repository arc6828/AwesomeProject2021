import * as React from 'react';
import HomeStack from '../navigations/HomeStack';
import HomeScreen from '../screens/HomeScreen';
import AntScreen from '../screens/AntScreen';
import BirdScreen from '../screens/BirdScreen';
import CatScreen from '../screens/CatScreen';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return (
        <Tab.Navigator    
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name){
                        case "HomeStack" :
                            iconName = 'md-home';
                            break;
                        case "AntScreen" : 
                            iconName = 'md-bug';
                            break;
                        case "BirdScreen" : 
                            iconName = 'logo-twitter';
                            break;
                        case "CatScreen" : 
                            iconName = 'logo-octocat';
                            break;
                    }                        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}

            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        
            >
            <Tab.Screen 
                name="HomeStack" 
                component={HomeStack} 
                options={{  title: 'Home'  }} 
                
                />
            <Tab.Screen 
                name="AntScreen" 
                component={AntScreen} 
                options={{  title: 'Ant'  }} 
                />      
            
            <Tab.Screen 
                name="BirdScreen" 
                component={BirdScreen} 
                options={{  title: 'Bird'  }} 
                />     
            
            <Tab.Screen 
                name="CatScreen" 
                component={CatScreen} 
                options={{  title: 'Cat'  }} 
                />               
            
        </Tab.Navigator>    
    );
}

import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import MapDriverScreen from '../screens/MapDriverScreen';
import MapUserScreen from '../screens/MapUserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function MapTab() {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name){
                        case "MapDriverScreen" :
                            iconName = 'md-bicycle';
                            break;
                        case "MapUserScreen" : 
                            iconName = 'md-person';
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
                name="MapDriverScreen" 
                component={MapDriverScreen} 
                options={{  title: 'Driver'  }} 
                />                
            <Tab.Screen 
                name="MapUserScreen" 
                component={MapUserScreen} 
                options={{  title: 'User'  }}                 
                />                       
        </Tab.Navigator>            
    );
}

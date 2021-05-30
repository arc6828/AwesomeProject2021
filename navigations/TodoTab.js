import * as React from 'react';
import { View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TodoScreen from '../screens/TodoScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function TodoTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name){
                        case "TodoScreen" :
                            iconName = 'md-list';
                            break;
                        case "ProfileScreen" : 
                            iconName = 'md-person';
                            break;
                        case "SettingScreen" : 
                            iconName = 'md-settings';
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
                name="TodoScreen" 
                component={TodoScreen} 
                options={{  title: 'Todo'  }}                 
                />            
            <Tab.Screen 
                name="ProfileScreen" 
                component={ProfileScreen} 
                options={{  title: 'Profile'  }} 
                />                
            <Tab.Screen 
                name="SettingScreen" 
                component={SettingScreen} 
                options={{  title: 'Setting'  }}                 
                />            
        </Tab.Navigator>   
                  
    );
}

function ProfileScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  , justifyContent : 'center'  }}>            
            <Text style={{ fontSize : 30, paddingTop : 20 }}> Profile Screen </Text>                
        </View>
    );
}

function SettingScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  , justifyContent : 'center'  }}>            
            <Text style={{ fontSize : 30, paddingTop : 20 }}> Setting Screen </Text>                
        </View>
    );
}

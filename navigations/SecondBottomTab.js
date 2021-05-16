import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function SecondBottomTab() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch(route.name){
                        case "FlashScreen" :
                            iconName = 'md-flash';
                            break;
                        case "FlameScreen" : 
                            iconName = 'md-flame';
                            break;
                        case "LeafScreen" : 
                            iconName = 'md-leaf';
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
                name="FlashScreen" 
                component={FlashScreen} 
                options={{  title: 'Pikachu'  }} 
                />                
            <Tab.Screen 
                name="FlameScreen" 
                component={FlameScreen} 
                options={{  title: 'Charmander'  }} 
                
                />
            <Tab.Screen 
                name="LeafScreen" 
                component={LeafScreen} 
                options={{  title: 'Ivysour'  }} 
                />  
            
        </Tab.Navigator>    
    );
}

function FlashScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Pikachu</Text>                
        </View>
    );
}

function FlameScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://i.pinimg.com/originals/dc/75/b9/dc75b96b4141c0a0f5d2658b084e170b.png"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Charmander</Text>                
        </View>
    );
}

function LeafScreen(){
    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://i.pinimg.com/originals/46/7e/db/467edb818bc862ef7f54dece5df4d762.png"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Ivysour</Text>                
        </View>
    );
}


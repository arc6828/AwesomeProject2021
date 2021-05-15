//components/Item.js
//IMPORT ITEM HERE
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressViewIOSComponent, View } from 'react-native';
import { Text, StyleSheet ,Image,props} from "react-native";


export default function Item(props) { 
   return (      
       <View style={{ flex:1, flexDirection : 'row' }}>

            <Image source={{uri: props.image}}
                style={{ width: 80, height: 80 }}
            />

            <View style={{ flex:1, flexDirection : 'column', padding : 10 }}>
                <Text style={{fontWeight:'bold', fontSize :  18 }}>Title :{props.title} </Text>
                <Text style={{ fontSize :  14 }}>ReleaseYear :{props.releaseYear}</Text>
            </View>

        </View> 
   ); 
   
}

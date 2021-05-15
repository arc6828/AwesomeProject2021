import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex7() {
  return (
    <View style={{ flex :1, flexDirection : 'row',alignContent:'flex-end',alignItems:'flex-end'}}>    
      <View style={{ backgroundColor : '#50E3C2', width : 100, height: 100 }}></View>
      <View style={{ backgroundColor : '#4A90E2', width : 100, height: 100 }}></View>  
      <View style={{ backgroundColor : '#9013FE', width : 100, height: 100  }}></View>      
    </View>
  );
}

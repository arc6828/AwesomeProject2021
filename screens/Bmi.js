import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Bmi() { 

    const [weight , setWeight] = useState('70');
    const [height , setHeight] = useState('170');
    const [bmi , setBmi] = useState('0');
    const [thisBMI ,setDescription ] = useState('');

    console.log("STATE : ", weight, height, bmi,thisBMI);

    const compute = () => {
        
        console.log("Calculate button is pressed!!!");
        let output = (weight/ (height/100 * height/100));
        setBmi(output.toFixed(2));

        let Description = "";
        if (output<18.5)
                Description ="Underweight - eat a bagel!";
        else if (output>=18.5 && output<=24.99)
                Description ="Normal - keep it up!";
        else if (output>=25 && output<=29.99)
                Description ="Overweight - exercise more!";
        else if (output>=30 && output<=39.99)
                Description ="Obese - get off the couch!";
        else if (output>=40)
                 Description ="Morbidly Obese - take action!";
        setDescription(Description.toString());
    };

    

    
    return (
    <View style={{ 
        flex : 1, 
        flexDirection : 'column', 
        justifyContent : 'center', 
        paddingHorizontal : 20 ,
        }}>

        <Text style={{ fontSize : 30 }}>Weight (kgs) : </Text>
        <TextInput 
            placeholder="enter your weight ..."            
            keyboardType="numeric"
            style={{ marginBottom : 20 }} 
            value={weight}
            onChangeText={ (text) => setWeight(text) }
            />

        <Text style={{ fontSize : 30 }}>Height (cm) : </Text>
        <TextInput 
            placeholder="enter your height ..."
            keyboardType="numeric"
            style={{ marginBottom : 20 }}
            value={height}
            onChangeText={ (text) => setHeight(text) }
            />

        <Text style={{ fontSize : 30 }}>BMI : {bmi}</Text>
        <Text style={{ fontSize : 30 }}>{thisBMI}</Text>
        <Button title="Calculate" onPress={compute}   />

    </View>
    );
}

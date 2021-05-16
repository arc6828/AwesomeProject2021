import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';

export default function AntScreen() {

    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://cdn3.movieweb.com/i/article/Oi0Q2edcVVhs4p1UivwyyseezFkHsq/738:50/Ant-Man-3-Talks-Michael-Douglas-Update.jpg"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Ant</Text>                
        </View>
    );
}

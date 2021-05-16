import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';

export default function CatScreen() {

    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanidiplacido%2Ffiles%2F2018%2F01%2FMBA7020_v008.1028-1200x633.jpg"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Cat</Text>                
        </View>
    );
}

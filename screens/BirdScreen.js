import * as React from 'react';
import { View, Text, Button , Image} from 'react-native';

export default function BirdScreen() {

    return (
        <View style={{ flex: 1, alignItems : 'center'  }}>
            <Image
                source={{ uri : "https://cdn.vox-cdn.com/thumbor/n1ad23hZrumsQ8gdXQ3yAyPYn8U=/0x0:1400x787/1200x800/filters:focal(405x89:629x313)/cdn.vox-cdn.com/uploads/chorus_image/image/63686080/lag0835_v074.1004_wide_6038893c740ea664a676ebc5d8160b22c02ad616.0.jpg"  }} 
                style={{width: '100%', height: 500}}
                /> 
            <Text style={{ fontSize : 30, paddingTop : 20 }}>Bird</Text>                
        </View>
    );
}

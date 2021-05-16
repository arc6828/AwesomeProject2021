import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function NetworkCreateScreen({ navigation }) {   
    
    const [id , setID] = useState("");     
    const [title , setTitle] = useState(""); 
    const [releaseYear , setReleaseYear] = useState(""); 
    const [image , setImage] = useState(""); 
             
    const onSubmit = async ()=>{
        console.log("Press Submit !!!");
        let data = { 
            "id" : id,
            "title" : title,
            "releaseYear": releaseYear,
            "image": image,
        };
        console.log("Submit : ",  data);
        try{           
            let promise = await fetch('https://www.csbootstrap.com/api/movies', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            }); 
            let result = await promise.json();
            console.log("Result : " , result);
            navigation.navigate('NetworkScreen');
            if(result.status == "success"){
                console.log("Success !!! " );
                //navigation.navigate('HomeScreen');
            }
            //setMarkers(data);
        }catch(error){
            console.log("ERROR : " , error);
        }     
    };

    return (

        <View style={{ flex: 1, justifyContent: 'flex-start', padding : 20 }}>
            {/* <Text>Customer Information</Text> */}
            
            <Text style={{ fontSize : 20 }}>Create Movies</Text>

            <Text style={{ color: 'red' }}>ID : </Text>
            <TextInput
                style={{ width : '90%', padding : 10  }}
                autoCapitalize="none"
                placeholder="fill id with random character ..."
                />
            <Text style={{ color: 'red' }}>Title : </Text>
            <TextInput
                style={{ width : '90%', padding : 10  }}
                autoCapitalize="none"
                placeholder="movie title ..."
                onChangeText={ (text) => setTitle(text) }
                />
            <Text style={{ color: 'red' }}>Release year : </Text>
            <TextInput
                style={{ width : '90%', padding : 10  }}
                autoCapitalize="none"
                placeholder="year ..."
                onChangeText={ (text) => setReleaseYear(text) }
                />        
            <Text style={{ color: 'red' }}>Image URL :  </Text>
            <TextInput
                style={{ width : '90%', padding : 10  }}
                autoCapitalize="none"
                placeholder="URL with https ...."                
                onChangeText={ (text) => setImage(text) }
                />
                            
            
            <Button title="Save" onPress={onSubmit} />
        </View>
    );
}

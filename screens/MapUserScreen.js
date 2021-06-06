import React, { useState, useEffect } from 'react';
import { View, Dimensions  } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fb } from '../db_config';

export default function MapUserScreen({ navigation }) {   
    const [markers, setMarkers] = useState([]);   

    useEffect(() => {
        //QUERY DATA FROM FROM FIREBASE & SET MARKERS STATE HERE 
        fb.firestore().collection("driver_locations")
            .get().then((querySnapshot) => {
                const driver_locations = querySnapshot.docs.map(doc => doc.data());
                
                //WRITE TO ASYNC STORAGE
                // writeTodos(todos);

                //SET STATE
                setMarkers(driver_locations);                           
            });         

    },[]);


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                {(() => {
                    //IF MARKERS MORE THAN ZERO
                    if(markers.length > 0){
                        return (
                        <MapView 
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}                     
                            initialRegion={{
                                latitude: markers[0].coords.latitude,
                                longitude: markers[0].coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}                            
                            >                            
                            {markers.map(marker => (
                                <Marker
                                coordinate={marker.coords}
                                title={marker.user_id}
                                key={marker.user_id}
                                //description={marker.description}
                                />
                            ))}
                        </MapView>
                        );
                    }
                })()}
            </View>
            
        </View>
    );
}

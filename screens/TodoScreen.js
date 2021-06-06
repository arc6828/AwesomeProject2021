import React , { useState, useEffect } from 'react';
import { View , TouchableOpacity, FlatList , Text, LogBox ,Modal  } from 'react-native';
import TodoItem  from '../components/TodoItem';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import ImageViewer from 'react-native-image-zoom-viewer';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import { fb } from '../db_config';

export default function TodoScreen({ navigation }) {    
    const [todos , setTodos] = useState(
        [
            // { _id : '1' , completed : false,  title : "exercise @ 7.00" },
            // { _id : '2' , completed : false,  title : "meeting @ 9.00"},
            // { _id : '3' , completed : false,  title : "go to cinema @ 19.00"},
        ]     
    );

    const [modalVisible, setModalVisible] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {               
        //Load ข้อมูลจาก Async Storage (HD)
        // readTodos();
        LogBox.ignoreLogs(['Setting a timer']);
        readTodosFirebase();    
    },[]); 

    const readTodosFirebase = async () => {
        fb.firestore().collection("todos")
            .get().then((querySnapshot) => {
                const todos = querySnapshot.docs.map(doc => doc.data());
                
                //WRITE TO ASYNC STORAGE
                writeTodos(todos);

                //SET STATE
                setTodos(todos);                           
            });            
    }

    const removeTodosFirebase = async (new_data) => {
        fb.firestore().collection("todos")
            .doc(new_data._id)
            .delete()
            .then(function() {
                console.log("Firestore successfully deleted!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });          
    }
    const writeTodosFirebase = async (new_data) => {
        fb.firestore().collection("todos")
            .doc(new_data._id)
            .set(new_data)
            .then(function() {
                console.log("Firestore successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });          
    }    
    


    const onCreate = () => {
        let new_data = {
            _id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY
        let t = [...todos];
        //APPEND NEW DATA INTO ARRAY
        t.push(new_data);     
        //UPDATE STATE
        setTodos(t);    
        
        //ASYNC STORAGE
        writeTodos(t);

        //UPDATE FIRESTORE
        writeTodosFirebase(new_data); 
    };

    const onUpdate = (new_title, _id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item._id == _id));
        //Update object's name property.
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);

        //UPDATE FIRESTORE
        let new_data = t[index];
        writeTodosFirebase(new_data);

    }; 

    const onCheck = (_id) => {
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = ! t[index].completed;
        setTodos(t);

        //ASYNC STORAGE
        writeTodos(t);

        //UPDATE FIRESTORE
        let new_data = t[index];
        writeTodosFirebase(new_data);


    };  

    const onDelete = (_id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item._id == _id));
        let removed_item = t.splice(index, 1);
        setTodos(t);   

        //ASYNC STORAGE
        writeTodos(t);
        
        //UPDATE FIRESTORE
        let new_data = removed_item[0];
        removeTodosFirebase(new_data);
     
    };   

    const writeTodos = async (object_value) => {
        try {
            const string_value = JSON.stringify(object_value)
            await AsyncStorage.setItem("@todos", string_value)
        } catch (e) {
            // saving error
        }
    }

    const readTodos = async () => {
        try {
            const string_value = await AsyncStorage.getItem("@todos")
            //JSON.parse(...) ใช้ Convert String to Array
            let todos = string_value != null ? JSON.parse(string_value) : [];
            setTodos(todos);
        } catch(e) {
            // error reading value
        }
    } 

    




    return (
        <View style={{ flex : 1 }}>            
            <FlatList 
                style={{ marginTop : 15 }}
                data={todos}
                keyExtractor={item => item._id}
                renderItem={ ({ item }) => {
                        return (
                            // <Text>{item.title}</Text>     
                            <TodoItem  
                                item={item}                                  
                                onUpdate={onUpdate}
                                onCheck={onCheck} 
                                onDelete={onDelete}
                                setImages={setImages}
                                setModalVisible={setModalVisible}
                                navigation={navigation}
                                
                                />                       
                        );
                    }      
                }
                />  
            <TouchableOpacity            
                onPress={onCreate}    
                style={{
                    backgroundColor: "lightblue" ,
                    padding : 10,
                    width : 50,
                    height : 50,
                    alignItems : "center",
                    alignContent : "center",
                    borderRadius:25, 
                    position : 'absolute'  ,
                    right : 10,
                    bottom : 10,
                }}
                >
                <Ionicons name='md-add' size={26} />
            </TouchableOpacity>
            <Modal 
                visible={modalVisible} 
                transparent={true}
                onRequestClose={() => { setModalVisible(false); }}
                >
                <ImageViewer imageUrls={images}
                    enableSwipeDown={true}
                    onCancel={()=>{ console.log("SwipeDown"); setModalVisible(false); }} 
                    onSave={(uri)=>{
                        console.log("TEXT : " ,uri);
                        //SPLIT STRING WITH "/" => ["file:",...,"ImagePicker","df2bbd81-da8c-4e3d-aa26-4b71686ea623.jpg"]
                        //GET LAST ITEM IN ARRAY BY POP()
                        //REMOVE ?xxxxxxx after filename
                        //REMOVE %
                        let filename = uri.split('/').pop().split('?')[0].replace("%","");
                        (async () => {             
                            try{
                                const response = await FileSystem.downloadAsync(
                                    uri,
                                    FileSystem.documentDirectory + filename
                                );
                                console.log("response : ", response);
                                // const asset = await MediaLibrary.createAssetAsync(response.uri);
                                // await MediaLibrary.createAlbumAsync("Downloads", asset, false);
                                await MediaLibrary.saveToLibraryAsync(response.uri);
                            }catch(error){
                                console.error(error);
                            }                            
                         })();                        
                    }}  
                    />
            </Modal>
        </View>
    );
}

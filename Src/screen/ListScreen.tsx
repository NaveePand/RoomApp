import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


import { CommonActions, useNavigation } from '@react-navigation/native';
import { ListUpAction } from './Actions';


const ListScreen = () => {
  const navigation = useNavigation()





  const handleback = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      }));
  };
  const {
    control,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();

  const [combinedArray, setCombinedArray] = useState<any[]>([]);







  const fetchData = async () => {


    const result: any = await ListUpAction(dispatch);
    setCombinedArray(result.data);






  };



  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#87CEEB', 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B0C4DE',
        padding: 15,
        margin: 10,
      
      }}
      onPress={() => navigation.navigate('DetailScreen', { item })}
    >
      <View>
        <Text style={styles.text}>User ID: {item.userId}</Text>
        <Text style={styles.text}>ID: {item.id}</Text>
        <Text style={styles.text}>Title: {item.title}</Text>
        <Text style={styles.text}>Body: {item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  return (

    <View style={styles.container}>
      <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }} onPress={handleback}>
        <Image source={require('../../assets/image/arrow.png')} style={{ width: 50, height: 50 }} />

      </TouchableOpacity>
    





        <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 24, color: '#333' }}>
          ListScreen
        </Text>



        <View style={{ marginHorizontal: 50 }}>
          <FlatList
            // numColumns={2}
            data={combinedArray}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}

          />
        </View>



        <View style={{ height: 400 }} />

    </View>


  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#E6E6FA',
  },






  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    whiteSpace: 'pre-line', 
  },







});

export default ListScreen;

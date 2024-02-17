import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const data = route.params.item;

  const handleBack = () => {
    navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "ListScreen" }],
        }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Image source={require('../../assets/image/arrow.png')} style={styles.arrowImage} />
      </TouchableOpacity>
      <Text style={[styles.labelText,{textAlign:'center'}]}>Detail Screen</Text>     
      <View style={styles.boxContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>User ID:</Text>
          <Text style={styles.text}>{data.userId}</Text>

          <Text style={styles.labelText}>ID:</Text>
          <Text style={styles.text}>{data.id}</Text>

          <Text style={styles.labelText}>Title:</Text>
          <Text style={styles.text}>{data.title}</Text>

          <Text style={styles.labelText}>Body:</Text>
          <Text style={styles.text}>{data.body}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA'
  },
  backButton: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  arrowImage: {
    width: 50,
    height: 50,
  },
  boxContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF5733', // Change this to your desired border color
    borderRadius: 10,
    padding: 15,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});

export default DetailScreen;

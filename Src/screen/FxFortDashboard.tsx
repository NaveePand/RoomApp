import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';
import CustomeHeader from '../componet/CustomeHeader';
import ButtonBlue from '../componet/ButtonBlue';
import ButtonSecondry from '../componet/button/ButtonSecondry';
import ButtonLearnUSDFx from '../componet/button/ButtonLearnUSDFx';
import ButtonBottom from '../componet/button/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
//import ButtonSecondry from '../componet/button/ButtonBlue';

//import { useNavigation } from '@react-navigation/native';

const FxFortDashboard = () => {
  const navigation = useNavigation()

  const handleNavigate = () => {
    navigation.navigate('BuyUSDFx'); 
  };

  const p2p = () => {
    navigation.navigate('P2P'); 
  };
/*   useEffect(() => {
    console.log('Navigation Object:', navigation);
    // Use navigation.navigate() here
  }, [navigation]); */

  return (

    <View style={{ flex: 1, backgroundColor: '#D0E0F3' }}>

      <CustomeHeader />

      <ButtonBlue
        title={"USDFx Balance"}
        style={styles.button}
        onPress={() => { }}
      />
      <Text style={styles.inputContainer}>Trade at your fingertips</Text>

      <View style={styles.box}>
        <ButtonSecondry title={"Buy USDFx"}
          style={[styles.secondrybutton, { height: 90 }]}
        
        onPress={handleNavigate}
        />

        <ButtonSecondry title={"P2P Trade"}
          style={[styles.secondrybutton, { height: 90 }, { marginLeft: 15 }]}
          onPress={p2p}
        />
      </View>

     
        <Text style={styles.inputContainer}>Know USDFx Ecosystem </Text>
        <Text style={[styles.inputContainer, { color: '#FFFFFF' }, { marginHorizontal: 30 }]}>Learn about Partner program </Text>
        <ButtonLearnUSDFx title={"Learn about USDFx"}
          style={[styles.button, { height: 37 }]}
          onPress={() => { }}
        />

        <ButtonLearnUSDFx title={"Learn USDFx integration with Business"}
          style={[styles.button, { height: 37 }]}
          onPress={() => { }}
        />
      <Text style={styles.inputContainer}>Important Links </Text>


      <View style={styles.box}>
        <ButtonSecondry title={"PartnerApp"}
          style={[styles.secondrybutton, { height: 90 }]}
          onPress={() => { }}
        />

        <ButtonSecondry title={"Contact us"}
          style={[styles.secondrybutton, { height: 90 }, { marginLeft: 15 }]}
          onPress={() => { }}
        />
      </View>
      <View style={styles.bottomview}>
    <ButtonBottom title={"Contact us"}
          style={[styles.button,{height:60}]}
          onPress={() => { }}
          />
      </View>


    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginHorizontal: 25,
    marginTop: 20
    //  justifyContent: 'center',
    // alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30
  },
  inputContainer: {
    marginHorizontal: 20, marginTop: 20, color: '#295392', fontSize: 18
  },
  input: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 5,
  },

  draggableText: {
    fontWeight: 'bold',
  },

  boxColumn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#295392',
    //  height:110,
    //   width:'50%'
    //  justifyContent:'space-between'
    //  textAlign:'left'
  },

  secondrybutton: {
    backgroundColor: '#9DB7D9',
    width: 160
    //  height:110,
    //   width:'50%'
    //  justifyContent:'space-between'
    //  textAlign:'left'
  },

  bottomview: {
  //  backgroundColor: 'blue',
  //  padding: 15,
  //  borderRadius: 10,
  width:'100%',
    position: 'absolute',
    bottom: 0,
    
   // left: 16,
   // right: 16,
  //  alignItems: 'center',
  },
});

export default FxFortDashboard;

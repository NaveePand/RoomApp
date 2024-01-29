import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';
import CustomeHeader from '../componet/CustomeHeader';
import ButtonBlue from '../componet/ButtonBlue';
import ButtonSecondry from '../componet/button/ButtonSecondry';
import ButtonLearnUSDFx from '../componet/button/ButtonLearnUSDFx';
import ButtonBottom from '../componet/button/ButtonBottom';
import { useNavigation } from '@react-navigation/native';
import ButtonP2P from '../componet/button/ButtonP2P';
import { useDispatch, useSelector } from "react-redux";
//import ButtonSecondry from '../componet/button/ButtonBlue';

//import { useNavigation } from '@react-navigation/native';

const P2P = () => {
  const navigation = useNavigation()
  const rememberUserData = useSelector(
    (state: any) => state.user.rememberUserData
  );





  const renderItem = ({ item }) => (
    <View>
    <TouchableOpacity
      style={[
        styles.buttonflat,
        { backgroundColor: "#295392", height: 200 },
      ]}
    >
      
     <View style={{ flexDirection:'column' }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 70,
            justifyContent: "center",
            marginHorizontal: 10,
            marginTop: 12,
            backgroundColor: "#D0E0F3",
          }}
        >
          <Text style={[styles.title]}>Buy</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 15, marginRight: 10 }}>
          <Text style={[styles.title, { fontSize: 15 }]}>Total order</Text>
          <Text style={[styles.title, { fontSize: 15 }, { marginLeft: 5 }]}>
            105 |
          </Text>
          <Text style={[styles.title, { fontSize: 15 }]}>85.05%</Text>

        


        </View>
      </View>

   

      <View style={{ flexDirection: "column",marginTop:10,marginHorizontal:10 }}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
        <Text style={[styles.title, { fontSize: 18 }]}>Price</Text>
        <Text style={[styles.title, { fontSize: 18 }]}></Text>
        <View style={{flexDirection:'column'}}>
        <Text style={[styles.title, { fontSize: 18 }]}>Ramesh Mishra</Text>
        <TouchableOpacity
          style={{
            height: 40,
           // width: 70,
            justifyContent: "center",
            alignItems:'center',
            marginHorizontal: 10,
            marginTop: 12,
            backgroundColor: "#D0E0F3",
          }}
        >
          <Text style={[styles.title,{color:'black'}]}>Buy</Text>
        </TouchableOpacity>
        </View>
        </View>
        <Text style={[styles.title,{ fontSize: 18,marginTop:-40 }]}>INR {item.firstName}</Text>
        <Text style={[styles.title,{ fontSize: 18 }]}>Quantity {item.lastName} USDFx</Text>

        <View style={[styles.titleview, { marginHorizontal: 0 },{marginTop:15}]}>

     


        <View style={[styles.circleContainer,]}>
          <View style={[styles.circle,{backgroundColor:'#009393'}]} />
          </View>
<Text style={[styles.title,{ fontSize:15 },{marginLeft:5}]}>USDT</Text>
<View style={[styles.circleContainer,{marginLeft:5}]}>
          <View style={[styles.circle,{backgroundColor:'red'}]} />
          </View>
<Text style={[styles.title,{ fontSize:15 },{marginLeft:5} ]}>BANK TRANSFER</Text>
<View style={[styles.circleContainer,{marginLeft:5}]}>
          <View style={[styles.circle,{backgroundColor:'#D0E0F3'}]} />
          </View>
<Text style={[styles.title,{ fontSize:15 },{marginLeft:5} ]} >UPI</Text>

</View>
      </View>

{/* <View style={{ marginLeft:-300 }}>
        <Text style={[styles.title, { fontSize: 15 }]}>Price</Text>
        <Text style={[styles.title]}>INR {item.firstName}</Text>
        <Text style={[styles.title]}>Quantity {item.lastName} USDFx</Text>
      </View> */}

     {/*  <View style={[styles.titleview, { marginHorizontal: 0 }]}>

     



        <Text style={[styles.title]}>tyuuu</Text>
        <Text style={[styles.title, { fontSize: 32 }]}>0.00</Text>
        <Text>{item.date}</Text>
        <Text>{item.firstName}</Text>
        <Text>{item.lastName}</Text>
      </View> */}

      </View>
    </TouchableOpacity>
  </View>

  );
  return (

    <View style={{ flex: 1, backgroundColor: '#D0E0F3' }}>

      <CustomeHeader />


      <View style={styles.box}>

        <ButtonP2P title={"P2P Trade"}
          style={[styles.secondrybutton, { height: 90 }, { backgroundColor: '#295392' }]}
          onPress={() => { }}
        />
        <ButtonP2P title={"Express"}
          style={[styles.secondrybutton, { height: 90 }]}
          onPress={() => { }}
        />
      </View>


      <FlatList
        data={rememberUserData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View  style={{height:70}} />

      <View style={styles.bottomview}>
        <ButtonBottom title={"Contact us"}
          style={[styles.button, { height: 60 }]}
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
    width: '100%',
    position: 'absolute',
    bottom: 0,

    // left: 16,
    // right: 16,
    //  alignItems: 'center',
  },

  buttonflat: {
    //alignItems: 'center',
    //	borderRadius: 8,
    height: 73,
    //	justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 25

  },
  title: { fontSize: 24, fontWeight: '700', color: '#FFFFFF', },
  titleview: { flexDirection: 'row', },
  circleContainer: {
    alignItems: "center",
  //  marginTop: 20, // Adjust the margin based on your design
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10, // Make it a circle
    backgroundColor: "red", // Change the background color as needed
  },
});

export default P2P;

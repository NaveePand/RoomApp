import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';
import CustomeHeader from '../componet/CustomeHeader';
import ButtonBlue from '../componet/ButtonBlue';
import ButtonSecondry from '../componet/button/ButtonSecondry';
import ButtonLearnUSDFx from '../componet/button/ButtonLearnUSDFx';
import ButtonBottom from '../componet/button/ButtonBottom';
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import Input from '../componet/input/Input';
import moment from 'moment';
import CreateOrder from '../componet/button/CreateOrder';
export { ErrorToast } from '../componet/Error';
import {
    saveUserData,
    setRememberUserData,
  } from "../redux/reducers/user/UserReducer";
const BuyUSDFx = () => {
    const navigation = useNavigation()
  //  const dispatch =usrDisa

  const handlenavgation = () => {
    navigation.navigate('P2P'); 
  };
    const {
        control,
        setValue,
        handleSubmit,
        watch,
        formState: { errors, touchedFields },
    } = useForm({ mode: "onBlur" });

    const dispatch = useDispatch();
    // Watch the value of 'firstName' field
    const firstNameValue = watch('firstName');
    const rememberUserData = useSelector(
        (state: any) => state.user.rememberUserData
      );
    


    const calculatedLastNameValue = firstNameValue ? (firstNameValue * 0.85).toString() : '';

    useEffect(() => {
        setValue('lastName', calculatedLastNameValue);
    }, [calculatedLastNameValue, setValue]);

    const onSubmit = async (values: any) => {
        console.log("result", values);
        const result = values
        const updatedResult = {
            ...values,
            firstName: parseInt(values.firstName),
            lastName: parseFloat(values.lastName)
          };
          console.log("updatedResult", updatedResult);

          dispatch(setRememberUserData(updatedResult));

          console.log('remberr',rememberUserData);

           // Show a success toast
  /*   Toast.show({
        type: 'success',
        text1: 'Order Created Successfully',
        visibilityTime: 3000, // 3 seconds
      }); */
      Alert.alert('Order Created Successfully');
      handlenavgation();

    };





    return (

        <View style={{ flex: 1, backgroundColor: '#D0E0F3' }}>

            <CustomeHeader />

            <View style={{ backgroundColor: '#295392', marginTop: 20, flex: 0.7 }}>
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={[styles.inputContainer, { color: 'white' }]}>Buy USDFx </Text>
                    <Input
                        control={control}
                        name={"firstName"}
                        placeholder="I want to pay"
                        lable={"I want to pay"}
                        required={{ value: true, message: "Pay is required!" }}
                        keyboardType='numeric'
                        pattern={{
                            value: /^\d+$/, // Numeric pattern
                            message: 'Only numeric values are allowed.',
                        }}
                        error={errors?.firstName?.message}
                    />

                    <Input
                        control={control}
                        name={"lastName"}
                        placeholder="I will Receive"
                        lable={"I will Receive"}
                        //   required={{ value: true, message: "lastName Name is required!" }}
                        //  disabled={true}
                        editable={false}
                    //  error={errors?.lastName?.message}
                    />
                    <Input
                        control={control}
                        name={"date"}
                        lable="Order Valid Till"
                        placeholder="Date"
                        required={{
                            value: true,
                            message: "Date is required!",
                        }}
                        error={errors?.date?.message}

                        isDark
                        isDate

                        editable={false}

                        minDate={new Date()}
                    />





                    <CreateOrder title={"Create Order"}
                        style={[styles.createbutton, { height: 47 }, { marginTop: 10 }]}
                        onPress={handleSubmit(onSubmit)}
                    />
                </View>
            </View>


            <View style={{ flexDirection: 'row',marginTop:5 }}>
            <Image

source={require('../../assets/image/question.png')}
 style={{marginTop:4,}}

/>
<Text

style={{justifyContent:'center',alignItems:'center',marginLeft:10,textAlign:'center'}}

>
Boost your confidence in trading! Elevate your {'\n'} investment journey with guaranteed stability and convenience.At FxFort, purchase a minimum of 1100 USDFx directly.
{/* {title} */}
</Text>
            </View>






            <View style={styles.bottomview}>
                <ButtonBottom title={""}
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

    createbutton: {
        backgroundColor: '#D0E0F3',
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




   
});

export default BuyUSDFx;

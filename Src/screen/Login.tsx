import React, { useState, useEffect } from 'react';
import { View, Text,  StyleSheet, Image,  } from 'react-native';

import ButtonBlue from '../componet/ButtonBlue';

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


import { useNavigation } from '@react-navigation/native';



import { emailPattern, mediumRegex } from '../utilities/Utilities';
import Input from '../componet/input/Input';
import { setCredentials } from '../redux/reducers/user/UserReducer';
const Login = () => {
    const navigation = useNavigation()
    const handlenavgation = () => {
        navigation.navigate('HomeScreen');
    };


    const {
        control,
        setValue,
        handleSubmit,
        watch,
        formState: { errors, touchedFields },
    } = useForm({ mode: "onBlur" });

    const dispatch = useDispatch();




    const onSubmit = async (values: any) => {
        console.log("result", values);
        
     dispatch(setCredentials(values));
        handlenavgation();


    };





    return (

        <View style={styles.container}>

            <View style={styles.boxContainer}>

                <Text style={styles.signuptext}>SignUp</Text>

                <Image source={require('../../assets/image/user.png')} style={styles.icon} />

            </View>
            <View style={styles.inputContainer}>
                <Input
                    control={control}
                    name={"email"}
                    placeholder="Email"
                    lable='email'
                    required={{ value: true, message: "Email is requried!" }}

                    pattern={{
                        value: emailPattern,
                        message: 'Email invalid allowed.',
                    }}
                    error={errors?.email?.message}
                />



                <Input
                    control={control}
                    name={"password"}
                    placeholder="password"
                    lable='password'
                    isPassword={true}
                    pattern={{
                        value: mediumRegex,
                        message: 'Must contain at least 8 characters, one uppercase, one lowercase, and one numeric character',
                    }}
                    error={errors?.password?.message}
                />

                <ButtonBlue
                    title="Login"
                    style={{ width: '100%' }}

                    onPress={handleSubmit(onSubmit)}
                />


            </View>





        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#E6E6FA'
    },
    boxContainer: {
        marginHorizontal: 20,
        marginTop: 50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    signuptext: {
        color: 'red', marginTop: 20, textAlign: 'center', fontSize: 20

    },
    icon: {
        width: 100, height: 100, marginTop: 50
    },
    inputContainer: {
        marginHorizontal: 20, marginTop: 70
    },




});

export default Login;

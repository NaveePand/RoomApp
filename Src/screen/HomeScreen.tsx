import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, } from 'react-native';

import ButtonBlue from '../componet/ButtonBlue';

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";


import { CommonActions, useNavigation } from '@react-navigation/native';



import { logout } from '../redux/reducers/user/UserReducer';
const HomeScreen = () => {
    const navigation = useNavigation()
    const app = useSelector((state: any) => state.user);
    console.log('data', app.credentials
    );

    const handlenavgation = () => {



        navigation.navigate('ListScreen');
    };


    const handleback = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: "Login" }],
            }));

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
        //    console.log("result", values);
        //  const result: any = await ListUpAction();
        //   console.log('resyyyy',result);
        handlenavgation();
        //   fetchUser();



    };



    const onLogout = async (values: any) => {

        dispatch(logout());
        handleback();

    };






    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleback}>
                <Image source={require('../../assets/image/arrow.png')} style={styles.arrowImage} />
            </TouchableOpacity>

            <View style={styles.boxContainer}>
                <Text style={styles.titleText}>HomeScreen</Text>
                <Text style={styles.titleText}>Email: {app.credentials.email}</Text>
                <Text style={styles.titleText}>Password: {app.credentials.password}</Text>

            </View>
            <View style={{ marginHorizontal: 30, marginTop: 150 }}>
                <ButtonBlue
                    title="Logout"
                    // style={styles.button}
                    onPress={handleSubmit(onLogout)}
                />
                <View style={{ marginTop: 15 }}>


                    <ButtonBlue
                        title="Submit"
                        // style={styles.button}
                        onPress={handleSubmit(onSubmit)}
                    />
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
    },
    titleText: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },

});









export default HomeScreen;

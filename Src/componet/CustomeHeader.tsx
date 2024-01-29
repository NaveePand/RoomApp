import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';


const CustomeHeader = () => {



    return (

        <View style={styles.container}>

            <View
                style={styles.boxContainer}
            >

                <View style={styles.box}>
                    <Image

                        source={require('../../assets/image/drawer.png')}
                        style={{ width: 30, height: 30 }}
                    />

                    <View style={styles.logoimageview}>
                        <Image
                            //    source={require('../../assets/image/drawer.png')}
                            source={require('../../assets/image//logo.png')}
                            style={{ width: 30, height: 30}}
                        />
                    </View>
                </View>

                <View style={styles.vectorimageview}>

                    <Image

                        source={require('../../assets/image/vector.png')}
                        style={{ marginRight: 20 }}
                    />
                    <Text style={{ color: '#295392', marginRight: 20 }}>0xD23e....fa1</Text>

                    <Image

                        source={require('../../assets/image/ellipse.png')}
                        style={{ width: 30, height: 30, marginRight: 20 }}

                    />

                    <Image

                        source={require('../../assets/image/notifaction.png')}
                    //    style={{width:50,height:50}}

                    />

                </View>

            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
     //   flex: 1
    },
    boxContainer: {
        flexDirection: 'row', marginTop: 20, width: '100%', justifyContent: 'center', alignItems: 'center'
    },
    box: {
        justifyContent: 'flex-start', flexDirection: 'row', width: '40%'
    },
    logoimageview: {
        marginLeft: 20
    },
    vectorimageview: {
        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    },
    crossButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    crossButtonText: {
        color: 'red',
        fontWeight: 'bold',
    },
    draggable: {
        width: 80,
        height: 40,
        borderRadius: 8,
        //  backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,

    },
    draggableText: {
        fontWeight: 'bold',
    },
    clearButton: {
        marginTop: 20,
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 8,
    },
    clearButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    boxColumn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
});

export default CustomeHeader;

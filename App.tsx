import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, FlatList, } from 'react-native';




import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "react-native";

import { Provider as StoreProvider, useSelector } from "react-redux";

import { persistor, store } from "./Src/redux/store";
import MainStackNavigator from './Src/navigators/MainStackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Loader from './Src/componet/Loader';



const App = () => {



  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainStackNavigator />
          <Loader />
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>

  );
};




export default App;

// In App.js in a new project

import * as React from "react";
import { View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FxFortDashboard from "../screen/FxFortDashboard";
import BuyUSDFx from "../screen/BuyUSDFx";
import P2P from "../screen/P2P";
import Login from "../screen/Login";
import HomeScreen from "../screen/HomeScreen";
import ListScreen from "../screen/ListScreen";
import DetailScreen from "../screen/DetailScreen";


const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  const scheme = useColorScheme();


  return (
    <NavigationContainer>
      <Stack.Navigator
      
     
        screenOptions={{
          headerShown: false,
        }}
      >

<Stack.Screen name="Login" component={Login}    />

<Stack.Screen name="HomeScreen" component={HomeScreen}    />

<Stack.Screen name="ListScreen" component={ListScreen}    />

<Stack.Screen name="DetailScreen" component={DetailScreen}    />
      {/*   <Stack.Screen name="FxFortDashboard" component={FxFortDashboard}    />
        <Stack.Screen name="BuyUSDFx" component={BuyUSDFx}    />
        <Stack.Screen name="P2P" component={P2P}    /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainStackNavigator;

import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import Home from "./Screen/Home";
import GetStarted from "./Screen/GetStarted";
import Register from "./Screen/Register";
import SignIn from "./Screen/SignIn";
import AuthenticationScreen from "./Screen/AuthenticationScreen";
import Input from "./Screen/Input";
import SendMoney from "./Screen/SendMoney";

import { NavigationContainer } from "@react-navigation/native";


import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}  >
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AuthenticationScreen" component={AuthenticationScreen} />
      <Stack.Screen name="Input" component={Input} />
      <Stack.Screen name="SendMoney" component={SendMoney} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

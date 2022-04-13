import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import CustomInput from "../Component/CustomInput"
// import Input from './Input';


const Register = (props) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View >
      <Ionicons name="arrow-back" size={24} color="black"  onPress={() => props.navigation.goBack()} />
      {/* <CustomInput /> */}

    {/* <Input /> */}
    <TouchableOpacity onPress={() => props.navigation.navigate("AuthenticationScreen")} >
      <Text>Authentication</Text>
    </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})
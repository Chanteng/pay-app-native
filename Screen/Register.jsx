import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';

const Register = (props) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View >
      <Ionicons name="arrow-back" size={24} color="black"  onPress={() => props.navigation.goBack()} />
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})
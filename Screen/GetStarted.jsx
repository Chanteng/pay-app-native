import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const GetStarted = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={styles.header}>
        <Image
          style={styles.tinyLogo}
          source={require("../Images/LOGO1.png")}
        />
      </View>

      <View style={styles.text}>
        <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold" }}>
          See what's happening in the world right now!
        </Text>
        <TouchableOpacity
        onPress={() => props.navigation.navigate("Register")}
          style={{
            backgroundColor: "#024fff",
            height: 50,
            width: 300,
            marginTop: 15,
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              padding: 7,
              fontSize: 20,
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer} >
        <Text style={{ fontSize: 20}}>Have an account already?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")} >
        <Text style={{ fontSize: 20, marginLeft: 10, color: "#024fff"}} >Sign In</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
  },

  tinyLogo: {
    height: 120,
    width: 120,
  },

  text: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },

  footer: {
    flex: 0.1,
    flexDirection: "row",
    paddingHorizontal: 16
  }
});

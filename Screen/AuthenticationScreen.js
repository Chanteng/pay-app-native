import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React from "react";

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"padding"}
        style={styles.containerAvoidingView}
      >
        

      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthenticationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerAvoidingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
});

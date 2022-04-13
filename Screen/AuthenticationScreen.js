import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";

const AuthenticationScreen = (props) => {
  let textInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState();

  const [focusInput, setFocusInput] = useState(true);

  const onChangePhone = (number) => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if(phoneNumber) {
      props.navigation.navigate("Input")
    }
  };


  const onChangeFocus = () => {
    setFocusInput(true)
  }

  const onChangeBlur = () => {
    setFocusInput(false)
  }

  useEffect(()=>{
    textInput.focus()
  })
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"padding"}
        style={styles.containerAvoidingView}
      >
        <Text style={styles.textInput}>
          {"Please input a valid mobile phone number"}
        </Text>
        <View style={[styles.containerInput, {borderBottomColor: "#244DB7" }]}>
          <View style={styles.openDialogView}>
            <Text>{"+233 |"}</Text>
          </View>
          <TextInput
          ref={(input) => textInput = input }
            style={styles.phoneInputStyle}
            placeholder="570 885 254"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
          />
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View style={[styles.btnContainer, {backgroundColor: phoneNumber ? "#244DB7" : "gray" }]}>
              <Text style={{ color: "white", alignItems: "center" }}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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

  textInput: {
    marginBottom: 50,
    marginTop: 50,
    fontSize: 16,
  },

  containerInput: {
    flexDirection: "row",
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },

  openDialogView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  phoneInputStyle: {
    flex: 1,
    height: 50,
    marginLeft: 5,
  },

  viewBottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },

  btnContainer: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  
  },
});

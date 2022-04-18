import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";

const Input = (props) => {
  let textInput = useRef(null);
  const lengthInput = 5;
  const [internalVal, setInternalVal] = useState("");

  const onChangeText = (val) => {
    setInternalVal(val);
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  const [phoneNumber, setPhoneNumber] = useState();

  const [focusInput, setFocusInput] = useState(true);

  const onChangePhone = (number) => {
    setPhoneNumber(number);
  };

  const onPressContinue = () => {
    if (phoneNumber) {
      props.navigation.navigate("Home");
    }
  }

  

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={"padding"}
        style={styles.containerAvoidingView}
      >
        <Text style={styles.titleStyle}>
          {"Input your OTP code sent via SMS"}
        </Text>
        <View>
          <TextInput
            ref={(input) => (textInput = input)}
            style={styles.phoneInputStyle}
            // placeholder="570 885 254"
            keyboardType="numeric"
            value={internalVal}
            onChangeText={onChangeText}
            secureTextEntry={false}
          />
          {/* <TextInput
            ref={(input) => (textInput = input)}
            onChangeText={onChangeText}
            // style={{ width: 0, height: 0 }}
            value={internalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          /> */}

          <View style={styles.containerInput}>
            {Array(lengthInput)
              .fill()
              .map((data, index) => (
                <View
                  key={index}
                  style={[
                    styles.cellView,
                    {
                      borderBottomColor:
                        index === internalVal.length ? "#FB6C6A" : "#234BD7",
                    },
                  ]}
                >
                  <Text
                    style={styles.cellText}
                    onPress={() => textInput.focus()}
                  >
                    {internalVal && internalVal.length > 0
                      ? internalVal[index]
                      : ""}
                  </Text>
                </View>
              ))}
          </View>
        </View>
        {/* <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.btnChangeNumber}>
              <Text style={styles.textChange}>Change Number</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.btnResend}>
              <Text style={styles.textResend}>Resend </Text>
            </View>
          </TouchableOpacity>
        </View> */}

        <View style={styles.viewBottom}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
            <View
              style={[
                styles.btnContainer,
                { backgroundColor: phoneNumber ? "#244DB7" : "gray" },
              ]}
            >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerAvoidingView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  titleStyle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },

  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cellView: {
    paddingVertical: 10,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },

  cellText: {
    alignItems: "center",
    fontSize: 16,
  },

  bottomView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 50,
    alignItems: "center",
  },

  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "flex-start",
  },

  textChange: {
    color: "#234BD7",
    alignItems: "center",
  },

  btnResend: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  textResend: {
    alignItems: "center",
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

export default Input;

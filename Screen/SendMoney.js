import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Slider from "../Component/Slider";
import { doc, setDoc } from "firebase/firestore";
import {db} from "../firebase/firebase"
const SendMoney = () => {
  // const fbfunc = async () => {
  //   try {
  //     await setDoc(doc(db, "cities", "LF"), {
  //       name: "Los Angeles",
  //       state: "CA",
  //       country: "USA"
  //     });
  //     alert("doc created")
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => fbfunc()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity> */}

        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>To Mobile Details</Text>
      </View>
    </View>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 40,
    flexDirection: "row",
  },
});

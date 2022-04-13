import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Component/CustomInput";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const SignIn = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {height} = useWindowDimensions();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 16 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("../Images/SignIn.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={{marginTop: 30, paddingHorizontal: 16}}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="black"
            onPress={() => props.navigation.goBack()}
          />
        </View>
      </ImageBackground>

      {/* BottomView */}

      <View style={styles.bottomView}>
        <View style={{padding: 15}}>
          <Text style={{color: "black", fontSize: 25, textAlign: "center", }}>Welcome</Text>
         <TouchableOpacity  onPress={() => props.navigation.navigate("Register")} >
         <View style={{flexDirection: "row"}}>
         <Text  style={{color: "black", fontSize: 20 }}>Don't have an account?</Text>
          <Text  style={{color: "black", fontSize: 20, marginLeft: 10 }}>Sign up</Text>
         </View>
         </TouchableOpacity>
        </View>
      </View>

       {/* Form Inputs View */}

       <View style={{marginTop: 5}}>
       <CustomInput placeholder="Username" value={username} setValue={setUsername} />
       <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}  />
       </View>

    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    borderColor: "#024fff",
    borderStartWidth: 5,
    borderEndWidth: 5,
    borderTopWidth: 5,
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    marginTop: 30,
    alignItems: "center",
  }
});

import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const Home = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={styles.icons}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Image
                source={require("../Images/LOGO1.png")}
                style={{ width: 65, height: 65 }}
              />
              <Text style={{ fontSize: 25, fontStyle: "italic" }}>
                Bonuspay
              </Text>
            </View>
            <Ionicons
              name="person-circle-outline"
              size={35}
              color="black"
              style={{ alignItems: "center", marginTop: 37 }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 200,
          borderRadius: 20,
        }}
      >
        <Image
          source={require("../Images/Banner.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
      </View>

      <View style={styles.viewBottom}>
        <TouchableOpacity onPress={() => props.navigation.navigate("SendMoney")}>
         <View style={{flexDirection: "row"}}>
         <FontAwesome name="send" size={24} color="white" />
         <Text style={{ fontSize: 20, color: "white", marginLeft: 30}}>Send Money</Text>
         </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewBottom: {
    backgroundColor: "#234BD7",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 250,
    margin: 50
  }
});

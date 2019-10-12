import React from "react";
import { SCREENS } from "../constants";
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground
} from "react-native";
import img from "./img/lipstickbg.jpg";

function Home({ navigation }) {
  function handlePress() {
    navigation.navigate(SCREENS.WELCOME);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={{ width: "100%", height: "100%" }}>
        <Text style={styles.textBig}>Welcome to Estee Lauder</Text>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
    // <View style={styles.container}>
    //   <Text style={styles.textBig}>Welcome to Estee Lauder</Text>
    //   <TouchableOpacity style={styles.button}>
    //     <Text styles={textBtn}>Click to Get Started</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
Home.navigationOptions = {
  title: "Home"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffd1dc"
  },
  textBig: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    fontWeight: "400",
    color: "black",
    fontStyle: "italic"
  },
  button: {
    alignSelf: "stretch",
    paddingTop: 25,
    paddingBottom: 25,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: "#fadadd",
    color: "white",
    display: "flex",
    alignItems: "center",
    fontStyle: "italic",
    fontWeight: "500"
  },
  textBtn: {
    textAlign: "center",
    fontWeight: "200",
    alignSelf: "stretch",
    fontSize: 30,
    fontStyle: "italic"
  }
});
export default Home;

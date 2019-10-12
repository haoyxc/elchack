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
        <Text style={styles.textBig}>Beyond Estée</Text>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
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
    marginTop: 240,
    fontWeight: "800",
    color: "white"
    // fontStyle: "italic"
  },
  button: {
    alignSelf: "center",
    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#ffd1dc",
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

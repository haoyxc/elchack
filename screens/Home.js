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
  function handleImagePress() {
    navigation.navigate(SCREENS.WELCOME);
  }

  function handleCameraPress() {
    navigation.navigate(SCREENS.CAMERA);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={{ width: "100%", height: "100%" }}>
        <Text style={styles.textBig}>Beyond Estee</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleImagePress()}>
          <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
            Submit an image
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCameraPress()}>
          <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
            Take a picture
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
    margin: 10,
    fontWeight: "300",
    color: "black"
    // fontStyle: "italic"
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

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground
} from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { SCREENS } from "../constants";
import roseImg from "./img/abstractbg.png";

takePicture = async function(camera) {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  //  eslint-disable-next-line
  console.log(data.uri);
};

function Welcome({ navigation }) {
  const [chosenImage, setChosenImage] = useState(null);
  const base = "http://localhost:4000";
  async function askPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    return status;
  }
  async function chooseImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All
      // allowsEditing: true,
      // aspect: [4, 3]
    });
    console.log("result", result);
    if (result.cancelled) {
      return;
    }
    setChosenImage(result);
  }
  async function uploadImage() {
    const fd = new FormData();
    fd.append("photo", {
      uri: chosenImage.uri,
      type: "image/jpeg",
      name: "photo.jpg"
    });
    navigation.navigate(SCREENS.INFO);
    // try {
    //   let resp = await fetch(`${base}/img/${chosenImage.uri}`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
    //   console.log("in here");
    //   console.log(resp.json);
    //   navigation.navigate(SCREENS.INFO);
    // } catch (e) {
    //   console.log(e);
    // }

    console.log();
  }
  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={roseImg} style={{ width: "100%", height: "100%" }}>
        {/* <View style={styles.innerCon}> */}
        <Text style={styles.text}>Learn more about our quality ingredients</Text>
        {/* <TouchableOpacity onPress={() => chooseImage()}>
          <Text style={styles.innerText}>Touch me!</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.btnMain} onPress={() => chooseImage()}>
          {chosenImage ? (
            <Text style={styles.btnText}>Change your image</Text>
          ) : (
            <Text style={styles.btnText}>Upload an image of your product...</Text>
          )}
        </TouchableOpacity>
        <View style={{ style: "flex", justifyContent: "center", alignItems: "center" }}>
          {chosenImage ? (
            <Image
              source={{ uri: chosenImage.uri }}
              style={{ width: 200, height: 200, zIndex: 10 }}
            />
          ) : (
            <Text style={styles.helperText}>No image chosen</Text>
          )}
        </View>

        {/* </View> */}
        {chosenImage && (
          <TouchableOpacity onPress={() => uploadImage()}>
            <View
              style={{
                backgroundColor: "#FF1493",
                padding: 10,
                borderRadius: 20,
                paddingTop: 15,
                paddingBottom: 15,
                marginTop: 30,
                marginRight: 20,
                marginLeft: 20
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                Upload Image
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
}
Welcome.navigationOptions = {
  title: "Welcome"
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#ffbbcc"
  },
  innerCon: {
    // flex: 1,

    marginTop: 20
  },
  btnMain: {
    borderRadius: 20,
    color: "white",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20
  },
  text: {
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 25,
    padding: 20,
    borderRadius: 20,
    textAlign: "center"
  },
  innerText: {
    fontWeight: "200"
  },
  helperText: {
    textAlign: "center",
    fontWeight: "200",
    fontStyle: "italic"
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10
  }
});

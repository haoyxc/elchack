import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image
} from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { SCREENS } from "../constants";

import { RNCamera } from "react-native-camera";

takePicture = async function(camera) {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  //  eslint-disable-next-line
  console.log(data.uri);
};

function Welcome({ navigation }) {
  const [chosenImage, setChosenImage] = useState(null);
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
    console.log(chosenImage.uri);
  }
  useEffect(() => {
    askPermission();
  }, []);
  function upload() {
    navigation.navigate(SCREENS.INFO);
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <Text style={styles.text}>Welcome to Estee Lauder</Text>
        {/* <TouchableOpacity onPress={() => chooseImage()}>
          <Text style={styles.innerText}>Touch me!</Text>
        </TouchableOpacity> */}
        {chosenImage ? (
          <Button title="Change your image!" onPress={() => chooseImage()} />
        ) : (
          <Button
            title="Upload An Image of Your Product!"
            onPress={() => chooseImage()}
          />
        )}

        {chosenImage ? (
          <Image source={{ uri: chosenImage.uri }} style={{ width: 200, height: 200 }} />
        ) : (
          <Text style={styles.helperText}>No image chosen</Text>
        )}
        {chosenImage && (
          <TouchableOpacity onPress={() => uploadImage()}>
            <View
              style={{
                backgroundColor: "blue",
                padding: 10
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
      </View>
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
    textAlign: "center"
  },
  innerCon: {
    // flex: 1,

    marginTop: 20
  },
  text: {
    backgroundColor: "#ffbbcc",
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 20,
    padding: 20
  },
  innerText: {
    fontWeight: "200"
  },
  helperText: {
    textAlign: "center"
  }
});

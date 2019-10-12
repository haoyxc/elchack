import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

import { RNCamera } from "react-native-camera";
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "lightgreen",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Text>Waiting</Text>
  </View>
);
takePicture = async function(camera) {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  //  eslint-disable-next-line
  console.log(data.uri);
};

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerCon}>
        <Text style={styles.text}>Welcome to Estee Lauder</Text>
        <TouchableOpacity style={styles.innerText}>
          <Text>Touch me!</Text>
        </TouchableOpacity>
        {/* <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== "READY") return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}
                >
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera> */}
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
    flexDirection: "column"
  },
  innerCon: {
    backgroundColor: "#ffbbcc",
    // flex: 1,

    marginTop: 20
  },
  text: {
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: 20,
    padding: 20
  },
  innerText: {
    fontWeight: "200"
  }
});

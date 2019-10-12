import React from "react";
import { Video } from "expo-av";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  WebView,
  Platform,
  Image,
  ImageBackground
} from "react-native";
import markers from "./markers.json";

function VidPlayer({ navigation }) {
  // let url = navigation.getParam("url", "https://www.youtube.com/watch?v=hoX8QTlGfdA");
  let id = navigation.getParam("ind", 0);
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={{
          uri: markers[id].img
        }}
      >
        <Text
          style={{ color: "blue", zIndex: 5 }}
          onPress={() => Linking.openURL(markers[id].content)}
        >
          Google
        </Text>
      </ImageBackground>

      {/* <WebView
        // source={{ uri: markers[id].content }}
        style={styles.WebViewContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: markers[id].content }}
      /> */}
      {/* <View>
        <Text style={{ textAlign: "center" }}>A Deeper Look...</Text>
        {console.log(markers[id].content)}
        <Video
          source={{ uri: markers[id].content }}
          shouldPlay
          // resizeMode="cover"
          resizeMode="stretch"
          style={{ width, height: 300 }}
        />
        {/* <View style={styles.controlBar}></View> */}
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  controlBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  WebViewContainer: {
    marginTop: Platform.OS == "ios" ? 20 : 0
  }
});
Video.navigationOptions = {
  title: "VidPlayer"
};
export default VidPlayer;

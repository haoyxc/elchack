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
  ImageBackground,
  Linking,
  Button
} from "react-native";
import markers from "./markers.json";
import { Player } from "video-react";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

function VidPlayer({ navigation }) {
  // let url = navigation.getParam("url", "https://www.youtube.com/watch?v=hoX8QTlGfdA");

  function handlePress() {
    Linking.openURL(markers[id].content);
  }
  _handleOpenWithLinking = () => {
    Linking.openURL(markers[id].content);
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync(markers[id].content);
  };
  let id = navigation.getParam("ind", 0);
  const { width, height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <Button
        title="Open URL with ReactNative.Linking"
        onPress={this._handleOpenWithLinking}
        style={styles.button}
      />
      <Button
        title="Open URL with Expo.WebBrowser"
        onPress={this._handleOpenWithWebBrowser}
        style={styles.button}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
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
VidPlayer.navigationOptions = {
  title: "VidPlayer"
};
export default VidPlayer;

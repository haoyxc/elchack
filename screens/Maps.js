import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import markers from "./markers.json";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import { SCREENS } from "../constants";
import * as WebBrowser from "expo-web-browser";

function Maps({ navigation }) {
  // let [markers, setMarkers] = useState(null);
  let id = navigation.getParam("id", 0);
  let loc = markers[id];
  let items = navigation.getParam("items", "Good ingredient!");

  function handleClick(num) {
    WebBrowser.openBrowserAsync(markers[num].content);
  }

  return (
    <View style={styles.container}>
      <Text styles={styles.textTitle}>This ingredient originated from...</Text>
      <MapView
        // onPress={() => handleClick()}
        style={styles.mapDisplay}
        initialRegion={{
          latitude: loc.coords.lat,
          longitude: loc.coords.lng,
          latitudeDelta: 0.0000001,
          longitudeDelta: 0.00000001
        }}
      >
        {/* <Marker
          onPress={() => handleClick()}
          coordinate={{ latitude: loc.coords.lat, longitude: loc.coords.lng }}
          title={item}
        /> */}
        <Marker
          onPress={() => handleClick(0)}
          coordinate={{
            latitude: markers[0].coords.lat,
            longitude: markers[0].coords.lng
          }}
          title={items[0]}
        />
        <Marker
          onPress={() => handleClick(1)}
          coordinate={{
            latitude: markers[1].coords.lat,
            longitude: markers[1].coords.lng
          }}
          title={items[1]}
        />
        <Marker
          onPress={() => handleClick(2)}
          coordinate={{
            latitude: markers[2].coords.lat,
            longitude: markers[2].coords.lng
          }}
          title={items[2]}
        />
      </MapView>
    </View>
  );
}
Maps.navigationOptions = {
  title: "Maps"
};
const styles = {
  container: {},
  textTitle: {
    fontSize: 20,
    textAlign: "center"
  },
  mapDisplay: {
    height: 600,
    zIndex: 1
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
  }
};
export default Maps;

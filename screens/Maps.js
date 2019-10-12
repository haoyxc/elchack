import React from "react";
import MapView, { Marker } from "react-native-maps";

import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
function Maps({ navigation }) {
  return (
    <View style={styles.container}>
      <Text styles={styles.textTitle}>This ingredient originated from...</Text>
      <MapView
        style={styles.mapDisplay}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Marker
          coordinate={{
            longitude: 37.78825,
            latitude: -122.4324
          }}
          title={`Sandalwood`}
        />
      </MapView>
    </View>
  );
}
Maps.navigationOptions = {
  title: "Maps"
};
const styles = {
  container: {
    // flex: 1
    // alignItems: "center"
    // flexDirection: "column",
    // textAlign: "center"
  },
  textTItle: {
    fontSize: 30,
    textAlign: "center"
  },
  mapDisplay: {
    height: 600,
    zIndex: 1
  }
};
export default Maps;

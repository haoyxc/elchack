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
    <View>
      <Text styles={styles.text}>INSERT MAP</Text>
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
          title={Sandalwood}
        />
      </MapView>
    </View>
  );
}
Maps.navigationOptions = {
  title: "Maps"
};
const styles = {
  text: {
    fontSize: 30
  },
  mapDisplay: {
    height: 600,
    zIndex: 1
  }
};
export default Maps;

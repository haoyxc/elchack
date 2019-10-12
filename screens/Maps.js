import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import markers from "./markers.json";
import { Video } from "expo-av";
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
  // let [markers, setMarkers] = useState(null);
  let id = navigation.getParam("id", 0);
  let loc = markers[id];
  let item = navigation.getParam("item", "Good ingredient!");
  let [showVid, setShowVid] = useState(false);

  function handleClick() {
    setShowVid(!showVid);
  }

  // function initMap() {
  //   // Map options
  //   var options = {
  //     zoom: 4,
  //     // centered at Australia
  //     center: { lat: -25.2744, lng: 133.7751 }
  //   };

  //   // New map
  //   var map = new google.maps.Map(document.getElementById("map"), options);

  //   // Loop through markers
  //   for (var i = 0; i < markers.length; i++) {
  //     // Add marker
  //     addMarker(markers[i]);
  //   }

  //   // Add Marker Function
  //   function addMarker(props) {
  //     var marker = new google.maps.Marker({
  //       position: props.coords,
  //       map: map
  //       //icon:props.iconImage
  //     });

  //     // Check for customicon
  //     if (props.iconImage) {
  //       // Set icon image
  //       marker.setIcon(props.iconImage);
  //     }

  //     // Check content
  //     if (props.content) {
  //       var infoWindow = new google.maps.InfoWindow({
  //         content: props.content
  //       });

  //       marker.addListener("click", function() {
  //         infoWindow.open(map, marker);
  //       });
  //     }
  //   }
  // }
  return (
    <View style={styles.container}>
      <Text styles={styles.textTitle}>This ingredient originated from...</Text>
      <MapView
        style={styles.mapDisplay}
        initialRegion={{
          latitude: loc.coords.lat,
          longitude: loc.coords.lng,
          latitudeDelta: 0.00001,
          longitudeDelta: 0.00005
        }}
      >
        <Marker
          onPress={() => handleClick()}
          coordinate={{ latitude: loc.coords.lat, longitude: loc.coords.lng }}
          title={item}
        />
        {showVid ? (
          <>
            {/* <Text style={{ textAlign: "center" }}> Info about this place!</Text> */}
            <Video
              source={{ uri: loc.content }}
              shouldPlay
              resizeMode="cover"
              style={{ width: 300, height: 300 }}
            />
            {/* <View style={styles.controlBar}></View> */}
          </>
        ) : null}
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

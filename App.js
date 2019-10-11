import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation-stack";
import { SCREENS } from "./constants";
import { Lens } from "./screens";
import { LensScreen } from "./screens";

const Navigator = createStackNavigator(
  {
    Lens: LENS
  },
  {
    initialRouteName: SCREENS.LENS
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default createAppContainer(Navigator);

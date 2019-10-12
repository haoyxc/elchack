import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SCREENS } from "./constants";
import { WelcomeScreen, InfoScreen, MapsScreen } from "./screens";

const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Info: InfoScreen,
    Maps: MapsScreen
  },
  {
    initialRouteName: SCREENS.WELCOME
  }
);

export default createAppContainer(Navigator);

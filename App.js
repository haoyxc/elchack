import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SCREENS } from "./constants";
import { LensScreen, WelcomeScreen, InfoScreen } from "./screens";

const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Lens: LensScreen,
    Info: InfoScreen
  },
  {
    initialRouteName: SCREENS.WELCOME
  }
);

export default createAppContainer(Navigator);

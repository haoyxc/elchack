import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { SCREENS } from "./constants";
import {
  WelcomeScreen,
  InfoScreen,
  MapsScreen,
  HomeScreen,
  VidPlayerScreen
} from "./screens";

import CameraScreen  from "./screens/CameraScreen";

const Navigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Info: InfoScreen,
    Maps: MapsScreen,
    Home: HomeScreen,
    VidPlayer: VidPlayerScreen,
    Camera: CameraScreen
  },
  {
    initialRouteName: SCREENS.HOME
  }
);

export default createAppContainer(Navigator);

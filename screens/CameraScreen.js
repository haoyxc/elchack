import React from 'react';
import { SCREENS } from "../constants";
import { Text, View, TouchableOpacity, CameraRoll, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Constants from 'expo-constants';

import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

import { 
  Ionicons,
  MaterialIcons,
  Foundation,
  MaterialCommunityIcons,
  Octicons
} from '@expo/vector-icons';


class CameraScreen extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.takePicture = this.takePicture.bind(this);
    this.onPictureSaved = this.onPictureSaved.bind(this);
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = async function () {
    await this.camera.takePictureAsync({ base64: true, onPictureSaved: this.onPictureSaved });
  };

  onPictureSaved = async function (shot) {
    this.props.navigation.navigate(SCREENS.INFO, {photo: shot});
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} 
          ref={ref => {
            this.camera = ref;
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1.0,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  marginBottom: 30
                }}
                onPress={this.takePicture}
                >
                <Ionicons name="ios-radio-button-on" size={80} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen

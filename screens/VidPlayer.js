import { Video } from "expo-av";
import { StyleSheet, View, Text } from "react-native";

function VidPlayer({ navigation }) {
  let url = navigation.getParam("url", "https://www.youtube.com/watch?v=hoX8QTlGfdA");
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={{ textAlign: "center" }}> React Native Video </Text>
          <Video
            source={{ uri: url }}
            shouldPlay
            resizeMode="cover"
            style={{ width, height: 300 }}
          />
          <View style={styles.controlBar}></View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
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
});
Video.navigationOptions = {
  title: "VidPlayer"
};
export default VidPlayer;

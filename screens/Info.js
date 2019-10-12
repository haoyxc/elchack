import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList
} from "react-native";
import exInfo from "./exInfo.json";
import { SCREENS } from "../constants";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import markers from "./markers.json";

function Info({ navigation }) {
  let [ingredients, setIngredients] = useState([]);
  let [ing1, setIng1] = useState(null);
  let [ing2, setIng2] = useState(null);
  let [ing3, setIng3] = useState(null);
  useEffect(() => {
    // console.log(exInfo.ingredients);
    setIngredients(exInfo.ingredients);
    setIng1(exInfo.ingredients[0].key);
    setIng2(exInfo.ingredients[1].key);
    setIng3(exInfo.ingredients[2].key);
  }, []);

  async function handleClick(i, item) {
    console.log("click!!!");
    navigation.navigate(SCREENS.MAPS, {
      id: i,
      items: [ing1, ing2, ing3]
    });
  }
  async function handleLongPress(i) {
    WebBrowser.openBrowserAsync(markers[i].content);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textBig}>{exInfo.product_name}'s Top Ingredients</Text>

      <TouchableOpacity
        style={styles.item}
        onLongPress={() => handleLongPress(0)}
        onPress={() => handleClick(0, ing1)}
      >
        <Text style={styles.itemTxt}>{ing1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onLongPress={() => handleLongPress(1)}
        onPress={() => handleClick(1, ing2)}
      >
        <Text style={styles.itemTxt}>{ing2}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onLongPress={() => handleLongPress(2)}
        onPress={() => handleClick(2, ing3)}
      >
        <Text style={styles.itemTxt}>{ing3}</Text>
      </TouchableOpacity>
    </View>
  );
}

Info.navigationOptions = {
  title: "Info"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    // justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
    textAlign: "center",
    backgroundColor: "#ffbbcc"
    // // paddingBottom: 200
  },
  innerCon: {
    marginTop: 20,
    backgroundColor: "#ffbbcc",
    marginBottom: 20
  },
  textBig: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "200",
    color: "black",
    fontStyle: "italic"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    height: 40,
    width: 300,
    paddingTop: 5,
    paddingBottom: 5,
    padding: 10,
    fontSize: 18,
    height: 44,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    borderRadius: 30,
    // width: 200,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "black"
  },
  itemTxt: {
    fontSize: 18
  }
});
export default Info;

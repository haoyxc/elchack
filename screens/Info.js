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

function Info({ navigation }) {
  let [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    // console.log(exInfo.ingredients);
    setIngredients(exInfo.ingredients);
  }, []);

  async function handleClick() {
    console.log("click!!!");
    navigation.navigate(SCREENS.MAPS);
  }
  return (
    <View style={styles.container}>
      <Text>{exInfo.ingredients.length} Ingredients Found</Text>
      <TouchableOpacity>
        <Text style={styles.item} onPress={() => handleClick()}>
          hellp
        </Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={exInfo.ingredients}
        keyExtractor={(ing, index) => `${ing}-${index}`}
        renderItem={({ item }) => {
          {
            // <TouchableOpacity style={styles.item} onClick={() => handleClick()}>
            {
              console.log("ITEM", item.name);
            }
            <Text style={styles.item}>{item.name}</Text>;
            // </TouchableOpacity>;
          }
        }}
      />
    </View>
  );
}

Info.navigationOptions = {
  title: "Info"
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 22
    // // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // // flexDirection: "column",
    // textAlign: "center"
    // // backgroundColor: "#ffbbcc"
    // // paddingBottom: 200
  },
  innerCon: {
    marginTop: 20,
    backgroundColor: "#ffbbcc",
    marginBottom: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    height: 40,
    width: 50
    // paddingTop: 5,
    // paddingBottom: 5,
    // padding: 10,
    // fontSize: 18,
    // height: 44,
    // paddingLeft: 20,
    // paddingRight: 20,
    // backgroundColor: "white",
    // // width: 200,
    // marginTop: 10,
    // marginBottom: 10,
    // borderColor: "black"
  },
  list: {
    flex: 1
    // backgroundColor: "white",
    // marginTop: 10
  },
  indivIng: {
    fontWeight: "200",
    fontSize: 20,
    textAlign: "center",
    color: "black"
  }
});
export default Info;

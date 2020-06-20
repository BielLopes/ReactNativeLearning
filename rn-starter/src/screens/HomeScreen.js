import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
        title="Go to Componenets Demo"
        onPress={() =>{
          //console.log("Button pressed")
          props.navigation.navigate("Components")
        }}
      />
      <TouchableOpacity 
        onPress={() => {
          console.log('List pressed!');
          props.navigation.navigate("List");
        }}
        >
        <Text>Go to Lsit Demo</Text>
      </TouchableOpacity>
      <Button 
        title="Go to Image Demo"
        onPress={() =>{
          //console.log("Button pressed")
          props.navigation.navigate("Image")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


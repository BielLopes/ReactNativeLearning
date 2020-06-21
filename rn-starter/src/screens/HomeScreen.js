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
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
        >
        <Text>Go to Count Demo</Text>
      </TouchableOpacity>
      <Button 
        title="Go to Image Demo"
        onPress={() =>{
          //console.log("Button pressed")
          props.navigation.navigate("Color");
        }}
      />
      <TouchableOpacity 
        onPress={() => {
          props.navigation.navigate("Square");
        }}
        >
        <Text>Go to Square Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


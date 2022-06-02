import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 31,
      top: 110,
      position: "absolute",
      height: 118,
      width: 134,
      backgroundColor: "#b2f1d5",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 51,
      top: 155,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Built in studio</Text></View>;
};

export default Untitled1;
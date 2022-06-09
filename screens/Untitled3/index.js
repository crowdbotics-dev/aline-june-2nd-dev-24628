import { CheckBox } from "react-native-elements";
import { Slider } from "react-native-elements";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled3 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 23,
      top: 23,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View><Text style={{
      left: 63,
      top: 41,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum… </Text><Slider style={{
      left: 29,
      top: 102,
      position: "absolute",
      width: 150,
      height: 40
    }} value={0.3} thumbStyle={{
      height: 20,
      width: 20,
      backgroundColor: "blue"
    }}></Slider><CheckBox style={{
      left: 27,
      top: 185,
      position: "absolute"
    }} title="Checkbox Title"></CheckBox></View>;
};

export default Untitled3;
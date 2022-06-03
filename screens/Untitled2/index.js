import React from "react";
import { View } from "react-native";
import { CheckBox } from 'react-native-elements';

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <CheckBox title='Click Here' checked={true} />
      </View>;
};

export default Untitled2;
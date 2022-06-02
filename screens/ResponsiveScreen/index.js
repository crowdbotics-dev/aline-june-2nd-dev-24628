import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Login = () => {
  return <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>Login</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textWrapper: {
    backgroundColor: 'lightpink',
    height: hp('70%'),
    // 70% of height device screen
    width: wp('80%') // 80% of width device screen

  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup

  }
});
export default Login;
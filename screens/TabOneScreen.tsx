import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Welcome from '../components/main/Welcome'
import title from '../assets/images/title.jpg';
import {Image} from 'react-native' ;
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Image style={{ width: 450, height: 575 }} source={require('../assets/images/title.jpg')}/>
    </View>
  );
}

const styles = StyleSheet.create({
//   Image: {
//     width: null,
//      resizeMode: 'contain',
//      height: 220
// },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

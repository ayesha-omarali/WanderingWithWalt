import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import {Image} from 'react-native' ;
import { Video } from 'expo-av';
import ParkMap from '../components/main/ParkMap'
import EasterEgg from '../components/main/EasterEgg';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.base} source={require('../assets/images/base.jpg')}/>
      <EasterEgg />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  base: {
    position: 'relative',
    width: 400,
    height: 300
  }
});
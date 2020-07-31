import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Welcome from '../components/main/Welcome'
import { Image } from 'react-native' ;
import { Text } from '../Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Welcome /> */}
      <Image style={styles.title} source={require('../assets/images/title-gold.png')}/>
      <Image style={styles.walt} source={require('../assets/images/mickeynwalt-gold.png')}/>
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
    backgroundColor: '#0c2b5c'
  },
  title: {
    position: 'absolute',
    // verticalAlign: 'middle',
    left: 10,
    top: 30,
    width: 200,
    height: 200
  },
  walt: {
    position: 'absolute',
    top: '41%',
    width: 170,
    height: 200
  }

});

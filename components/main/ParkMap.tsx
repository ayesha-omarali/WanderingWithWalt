import * as React from 'react';
import { Text, View } from '../Themed';
import { Image, StyleSheet } from 'react-native' ;

export default function ParkMap() {
  return (
    <View>
      <Image style={styles.greyMap} source={require('../../assets/images/base.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
//   Image: {
//     width: null,
//      resizeMode: 'contain',
//      height: 220
// },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0c2b5c'
  },
  greyMap: {
    // flex: 1,
    height: 200,
    width: 200,
  },

});
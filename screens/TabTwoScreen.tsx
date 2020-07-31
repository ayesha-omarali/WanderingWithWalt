import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import ParkMap from '../components/main/ParkMap'
import EasterEgg from '../components/main/EasterEgg';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ParkMap />
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

  // TODO: Add padding around map/accordion to look like Cards
});

import * as React from 'react';
import { StyleSheet } from 'react-native';
import ParkMap from '../components/main/ParkMap'
import Attractions from '../components/main/EasterEgg'

import { View } from '../components/Themed';
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
  },
});

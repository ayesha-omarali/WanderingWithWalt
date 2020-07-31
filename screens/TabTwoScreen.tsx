import * as React from 'react';
import { StyleSheet } from 'react-native';
import ParkMap from './ParkMap'
import Attractions from './Attractions'

import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ParkMap />
      <Attractions />
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

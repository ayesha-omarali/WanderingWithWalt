import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { Video } from 'expo-av';
import ParkMap from '../components/main/ParkMap'
import EasterEgg from '../components/main/EasterEgg';


export default class App extends React.Component {
 render() {
  return (
    <View style={styles.container}>
      <ParkMap />
      <Video
        source={{ uri: '../assets/images/mapvid.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
      <EasterEgg />

    </View>
    );
  }
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

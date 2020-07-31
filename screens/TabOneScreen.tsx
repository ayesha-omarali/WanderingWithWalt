import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import Welcome from '../components/main/Welcome'
<<<<<<< Updated upstream
=======
import {Image} from 'react-native' ;
import { Text } from '../Themed';

>>>>>>> Stashed changes

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
      <Welcome />
=======
      {/* <Welcome /> */}
      <Image style={{ position: 'absolute', left: 10, top: 10, width: 200, height: 200 }} source={require('../assets/images/title-gold.png')}/>
      <Image style={{ position: 'absolute', top: '40%', width: 170, height: 200 }} source={require('../assets/images/mickeynwalt-gold.png')}/>
>>>>>>> Stashed changes
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

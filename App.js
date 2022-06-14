import React from "react";
import {View ,Text, StyleSheet} from 'react-native';

import {BannerView} from 'react-native-fbads'

const App = () => {
 return(
  <View style={styles.container}>
    <Text style={styles.headText}>Welcome</Text>
    <View>
    <BannerView
        placementId="979736269624954_979737399624841"
        type="standard"
        onPress={() => console.log('click')}
        onError={(err) => console.log('error', err)}
      />
    </View>
  </View>
 );
}
export default App;

const styles= StyleSheet.create({
  container: {
    flex: 1
  },
  headText: {
    textAlign: 'center'
  }
})
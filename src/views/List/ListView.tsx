import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const ListView = () => {
  return (
    <MapView
      style={styles.map}
      testID={'map-view'}
      initialRegion={{
        latitude: 48.7717719,
        longitude: 2.2907234,
        latitudeDelta: 1.5,
        longitudeDelta: 1.9,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default ListView;

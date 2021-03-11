import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useListCampingItems} from './hooks/useListCampingItems';

type ListViewProps = {
  showCampingDetails: (id: string) => void;
};
const ListView = ({showCampingDetails}: ListViewProps) => {
  const {campingItems} = useListCampingItems();

  return (
    <MapView
      style={styles.map}
      testID={'map-view'}
      initialRegion={{
        latitude: 48.7717719,
        longitude: 2.2907234,
        latitudeDelta: 1.5,
        longitudeDelta: 1.9,
      }}>
      {campingItems &&
        campingItems.map((campingItem) => (
          <Marker
            key={campingItem.id}
            coordinate={campingItem.location}
            title={campingItem.name}
            accessibilityLabel={campingItem.name}
            onCalloutPress={() => {
              showCampingDetails(campingItem.id);
            }}
          />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default ListView;

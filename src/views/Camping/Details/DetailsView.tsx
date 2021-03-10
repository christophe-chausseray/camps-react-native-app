import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import useCampingDetails from './hooks/useCampingDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

type DetailsViewProps = {
  campingId: string;
  hideCampingDetails: () => void;
};

const DEFAULT_CAMPING_IMAGE =
  'https://media.istockphoto.com/photos/tourist-camp-with-fire-tent-and-firewood-picture-id941906052?k=6&m=941906052&s=612x612&w=0&h=TZDWIQdgHryloAw3YFveF_hyf1OeMxgaBdYl9F8BGJE=';

const displayNbStars = (nbStars: number) => {
  const content = [];
  console.log(nbStars);
  for (let index = 0; index < nbStars; index++) {
    content.push(<Icon key={index} name="star" size={30} color="#ffd055" />);
  }

  return content;
};
const DetailsView = ({campingId, hideCampingDetails}: DetailsViewProps) => {
  const {campingItem} = useCampingDetails(campingId);
  const image =
    campingItem && campingItem.image
      ? campingItem.image
      : DEFAULT_CAMPING_IMAGE;

  console.log(campingItem);
  if (!campingItem) {
    return null;
  }

  return (
    <ScrollView style={styles.detailView}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{campingItem?.name}</Text>
          <View style={styles.starIconContainer}>
            {campingItem.nb_stars &&
              displayNbStars(campingItem.nb_stars as number)}
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Icon
            style={styles.closeIcon}
            name="close"
            size={25}
            color="#ddd"
            onPress={hideCampingDetails}
          />
          <Image style={styles.image} source={{uri: image}} />
        </View>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationSection}>
          <Text style={styles.informationTitle}>Description</Text>
          <Text style={styles.informationContent}>
            {campingItem.description}
          </Text>
          <Text style={styles.informationContent}>
            <Text style={styles.boldText}>Capacity:</Text>{' '}
            {campingItem.nb_spots} spots
          </Text>
        </View>
        <View style={styles.informationSection}>
          <Text style={styles.informationTitle}>Address</Text>
          <Text style={styles.informationContent}>{campingItem.address}</Text>
        </View>
        <View style={styles.informationSection}>
          <Text style={styles.informationTitle}>Contact</Text>
          <Text style={styles.informationContent}>
            <Text style={styles.boldText}>Phone number:</Text>{' '}
            {campingItem.phone_number}
          </Text>
          <Text style={styles.informationContent}>
            <Text style={styles.boldText}>Email:</Text> {campingItem.email}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailView: {
    height: Dimensions.get('window').height - 70,
  },
  header: {
    flexDirection: 'row',
    marginTop: 5,
    height: 200,
    borderBottomWidth: 2,
    paddingBottom: 10,
    borderBottomColor: '#2f7510',
  },
  titleContainer: {
    flex: 1,
    padding: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
  },
  starIconContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  imageContainer: {
    width: 150,
    flex: 1,
  },
  closeIcon: {
    textAlign: 'right',
    paddingRight: 25,
    paddingBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  informationContainer: {
    padding: 10,
  },
  informationSection: {},
  informationTitle: {
    fontSize: 30,
    color: '#2f7510',
  },
  informationContent: {
    marginTop: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default DetailsView;

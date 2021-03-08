import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Le bon camping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: 70,
    backgroundColor: '#2f7510',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontFamily: 'Caveat-Regular',
    color: '#fff',
  },
});

export default Header;

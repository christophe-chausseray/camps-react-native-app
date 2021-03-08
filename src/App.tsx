import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './components/Header';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#fff',
  },
});

export default App;

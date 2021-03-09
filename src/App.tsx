import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Header from './components/Header';
import ListView from './views/List/ListView';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <ListView />
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

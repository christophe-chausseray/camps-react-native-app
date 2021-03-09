import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {Header} from './components';
import {ListView} from './views/Camping/List';
import {client} from './ApolloClient';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
};

const RootComponent = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <ListView />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#fff',
  },
});

export {App, RootComponent};

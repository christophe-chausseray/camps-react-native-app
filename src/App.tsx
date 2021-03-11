import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {Header} from './components';
import {ListView} from './views/Camping/List';
import {client} from './ApolloClient';
import {DetailsView} from './views/Camping/Details';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RootComponent />
    </ApolloProvider>
  );
};

const RootComponent = () => {
  const [displayDetailsView, setDisplayDetailsView] = React.useState(false);
  const [campingId, setCampingId] = React.useState<string | null>(null);

  const showCampingDetails = (id: string) => {
    setDisplayDetailsView(true);
    setCampingId(id);
  };

  const hideCampingDetails = () => {
    setDisplayDetailsView(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {!displayDetailsView && (
        <ListView showCampingDetails={showCampingDetails} />
      )}
      {displayDetailsView && campingId && (
        <DetailsView
          campingId={campingId}
          hideCampingDetails={hideCampingDetails}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'ui-sans-serif',
    backgroundColor: '#fff',
  },
});

export {App, RootComponent};

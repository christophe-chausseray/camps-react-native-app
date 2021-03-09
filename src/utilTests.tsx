import React, {FC} from 'react';
import {render} from '@testing-library/react-native';
import {ApolloProvider} from '@apollo/client';
import {client} from './ApolloClient';

const DefaultProviders: FC = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

const renderWithProviders = (ui: React.ReactElement) =>
  render(ui, {wrapper: DefaultProviders});

export {renderWithProviders};

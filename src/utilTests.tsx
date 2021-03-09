import React from 'react';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {GRAPHQL_MOCKS} from './mocks';

const DefaultProviders = ({children}: {children: React.ReactElement}) => (
  <MockedProvider mocks={GRAPHQL_MOCKS} addTypename={false}>
    {children}
  </MockedProvider>
);

const renderWithMockedProviders = (ui: React.ReactElement) =>
  render(ui, {wrapper: DefaultProviders});

export default renderWithMockedProviders;

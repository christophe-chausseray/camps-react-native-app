import React from 'react';
import {waitFor} from '@testing-library/react-native';
import renderWithMockedProviders from './utilTests';
import {FAKE_CAMPINGS} from './mocks';
import {RootComponent} from './App';

it('display the header with the application name', async () => {
  const {getByText} = renderWithMockedProviders(<RootComponent />);

  await waitFor(() => {
    getByText('Le bon camping');
  });
});

it('display a map on the list view', async () => {
  const {getByTestId} = renderWithMockedProviders(<RootComponent />);

  await waitFor(() => {
    getByTestId('map-view');
  });
});

it('display the camping item markers on the map', async () => {
  const {getByLabelText} = renderWithMockedProviders(<RootComponent />);

  await waitFor(() => {
    getByLabelText(FAKE_CAMPINGS[0].name);
    getByLabelText(FAKE_CAMPINGS[1].name);
  });
});

import React from 'react';
import {renderWithProviders} from './utilTests';
import App from './App';
import { waitFor } from '@testing-library/react-native';

it('display the header with the application name', async () => {
  const {getByText} = renderWithProviders(<App />);

  await waitFor(() => {
    getByText('Le bon camping');
  });
});

it('display a map on the list view', async () => {
  const {getByTestId} = renderWithProviders(<App />);

  await waitFor(() => {
    getByTestId('map-view');
  });
});

import React from 'react';
import {renderWithProviders} from './utilTests';
import App from './App';

it('display the header with the application name', () => {
  const {getByText} = renderWithProviders(<App />);

  getByText('Le bon camping');
});

it('display a map on the list view', () => {
  const {getByTestId} = renderWithProviders(<App />);

  getByTestId('map-view');
});

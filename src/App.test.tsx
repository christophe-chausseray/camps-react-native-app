import React from 'react';
import {render} from '@testing-library/react-native';
import App from './App';

it('display the header with the application name', () => {
  const {getByText} = render(<App />);

  getByText('Le bon camping');
});

it('display a map on the list view', () => {
  const {getByTestId} = render(<App />);

  getByTestId('map-view');
});

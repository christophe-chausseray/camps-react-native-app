import React from 'react';
import {waitFor, fireEvent} from '@testing-library/react-native';
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

// @todo: Find a solution to avoid act async warning error
// eslint-disable-next-line jest/no-disabled-tests
it.skip('display the camping item details when clicking on the title', async () => {
  const {getByLabelText, getByText} = renderWithMockedProviders(
    <RootComponent />,
  );

  await waitFor(() => {
    getByLabelText(FAKE_CAMPINGS[0].name);

    fireEvent(getByLabelText(FAKE_CAMPINGS[0].name), 'onCalloutPress');
  });

  await waitFor(() => {
    getByText(FAKE_CAMPINGS[0].description);
  });
});

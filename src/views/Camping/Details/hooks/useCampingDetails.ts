import {useLazyQuery, gql} from '@apollo/client';
import {useEffect} from 'react';
import {CampingItem} from '../../../../models';

const DETAIL_CAMPING_ITEM = gql`
  query DetailCampingItem($campingId: ID!) {
    camping(id: $campingId) {
      id
      name
      description
      image
      address
      zipcode
      city
      nb_spots
      nb_stars
      phone_number
      email
      website
    }
  }
`;

const useCampingDetails = (
  campingId: string,
): {campingItem: CampingItem | null} => {
  const [getDetailedCamping, {called, loading, data}] = useLazyQuery(
    DETAIL_CAMPING_ITEM,
    {
      fetchPolicy: 'network-only',
    },
  );

  useEffect(() => {
    if (campingId) {
      getDetailedCamping({variables: {campingId}});
    }
  }, [campingId, getDetailedCamping]);

  if (!called || loading) {
    return {campingItem: null};
  }

  return {campingItem: data.camping};
};

export default useCampingDetails;

import {useQuery, gql} from '@apollo/client';
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
  const result = useQuery(DETAIL_CAMPING_ITEM, {
    variables: {campingId: campingId},
  });

  if (undefined === result.data) {
    return {campingItem: null};
  }

  return {campingItem: result.data.camping};
};

export {useCampingDetails, DETAIL_CAMPING_ITEM};

import {useQuery, gql} from '@apollo/client';
import {CampingItem} from '../../../../models';

const LIST_CAMPING_ITEMS = gql`
  query ListCampingItems {
    campings {
      id
      name
      location {
        longitude
        latitude
      }
    }
  }
`;

const useListCampingItems = (): {campingItems: CampingItem[]} => {
  const result = useQuery(LIST_CAMPING_ITEMS);

  if (undefined === result.data) {
    return {campingItems: []};
  }

  return {campingItems: result.data.campings};
};

export default useListCampingItems;

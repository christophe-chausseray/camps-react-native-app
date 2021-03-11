import {v4 as uuidv4} from 'uuid';
import {LIST_CAMPING_ITEMS} from './../views/Camping/List/hooks/useListCampingItems';
import {DETAIL_CAMPING_ITEM} from './../views/Camping/Details/hooks/useCampingDetails';

const FAKE_CAMPINGS = [
  {
    id: uuidv4(),
    name: 'CAMPING HUTTOPIA RAMBOUILLET',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.',
    image:
      'https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=',
    address: "Route du Château d'eau",
    zipcode: 78120,
    city: 'RAMBOUILLET',
    nb_spots: 20,
    nb_stars: 3,
    phone_number: '168403928',
    email: 'contact@le-camping-huttopia.com',
    website: 'le-camping-huttopia.com',
    location: {
      latitude: 48.630059,
      longitude: 1.835694,
    },
    comments: [
      {
        id: uuidv4(),
        title: 'An amazing title',
        description: 'The camping is amazing !',
        author: 'chris',
        created_at: '2020-03-29',
      },
      {
        id: uuidv4(),
        title: 'A beutiful camping',
        description: 'The location is perfect !',
        author: 'ben',
        created_at: '2019-02-18',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'CARAVANING LE VAUVERT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan ut eros non mollis. Suspendisse sem risus, dignissim eu velit id, pulvinar viverra libero. Praesent vulputate risus in urna blandit, eget feugiat augue porttitor. In lobortis, neque nec fringilla efficitur, enim orci efficitur turpis, fermentum mattis purus massa sit amet nibh. Phasellus iaculis commodo neque, et bibendum augue aliquam eget. Donec eu vestibulum leo. Donec massa ligula, viverra nec tempor eu, tristique nec arcu. Suspendisse et accumsan tellus, eget facilisis ligula. Morbi gravida eleifend orci, vel sagittis metus accumsan sollicitudin. Sed luctus congue ligula, eu blandit arcu tincidunt nec. Etiam vitae molestie elit.',
    image:
      'https://media.istockphoto.com/photos/camping-tent-in-a-camping-in-a-forest-by-the-river-picture-id911995140?k=6&m=911995140&s=612x612&w=0&h=U-yG-2eR8pOxLX_G8Eg9fDI1SOWYifxbb4BiiOhNNiI=',
    address: '26 Route de Vauvert',
    zipcode: 91150,
    city: 'ORMOY-LA-RIVIÈRE',
    nb_spots: 230,
    nb_stars: 4,
    phone_number: '164942139',
    email: 'contact@camping-le-vauvert.com',
    website: 'camping-le-vauvert.com',
    location: {
      latitude: 48.411278,
      longitude: 2.143939,
    },
    comments: [],
  },
];

const GRAPHQL_MOCKS = [
  {
    request: {
      query: LIST_CAMPING_ITEMS,
    },
    result: {
      data: {
        campings: [
          {
            id: FAKE_CAMPINGS[0].id,
            name: FAKE_CAMPINGS[0].name,
            location: FAKE_CAMPINGS[0].location,
          },
          {
            id: FAKE_CAMPINGS[1].id,
            name: FAKE_CAMPINGS[1].name,
            location: FAKE_CAMPINGS[1].location,
          },
        ],
      },
    },
  },
  {
    request: {
      query: DETAIL_CAMPING_ITEM,
      variables: {
        campingId: FAKE_CAMPINGS[0].id,
      },
    },
    result: {
      data: {
        camping: {
          id: FAKE_CAMPINGS[0].id,
          name: FAKE_CAMPINGS[0].name,
          description: FAKE_CAMPINGS[0].description,
          image: FAKE_CAMPINGS[0].image,
          address: FAKE_CAMPINGS[0].address,
          zipcode: FAKE_CAMPINGS[0].zipcode,
          city: FAKE_CAMPINGS[0].city,
          nb_spots: FAKE_CAMPINGS[0].nb_spots,
          nb_stars: FAKE_CAMPINGS[0].nb_stars,
          phone_number: FAKE_CAMPINGS[0].phone_number,
          email: FAKE_CAMPINGS[0].email,
          website: FAKE_CAMPINGS[0].website,
        },
      },
    },
  },
];

export {FAKE_CAMPINGS, GRAPHQL_MOCKS};

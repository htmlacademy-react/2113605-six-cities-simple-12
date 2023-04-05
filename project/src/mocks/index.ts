export type CityType = {
  location: LocationType;
  name: typeof Cities[number];
};

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OffersPropsType = {
  id: string;
  mark: string;
  imageSrc: string;
  priceValue: number;
  rating: number;
  name: string;
  type: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: string;
};

export type ReviewsType = {
  id: string;
  avatar: string;
  user: string;
  rating: number;
  text: string;
  time: string;
};

export type CityNameType = typeof Cities[number];

export const Cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export enum SortType {
  Popular = 'Popular',
  LowPrice = 'Price: low to high',
  HightPrice = 'Price: high to low',
  Rating = 'Top rated first'
}

export const DEFAULT_SORT = SortType.Popular;

export const DEFAULT_CITY: typeof Cities[number] = 'Paris';

export const offers: OffersPropsType[] = [
  {
    id: '1',
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    rating: 3.8,
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
    location: {
      latitude: 48.862610000000004,
      longitude: 2.369499,
      zoom: 16,
    },
    city: 'Paris',
  },
  {
    id: '2',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 130,
    rating: 4,
    name: 'Super apartment on the beach',
    type: 'Apartment',
    city: 'Amsterdam',
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
  },
  {
    id: '3',
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    priceValue: 90,
    rating: 4,
    name: 'Cheap apartment, suitable for everyone',
    type: 'Apartment',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 12,
    },
    city: 'Amsterdam',
  },
  {
    id: '4',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 70,
    rating: 3,
    name: 'This is only with us and with Michael Jackson',
    type: 'Apartment',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    city: 'Amsterdam',
  },
];

export const reviews: ReviewsType[] = [
  {
    id: '1',
    avatar: 'img/avatar-max.jpg',
    user: 'Max',
    rating: 80,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    time: '2019-04-24',
  },
  {
    id: '2',
    avatar: 'img/avatar-angelina.jpg',
    user: 'Angelina',
    rating: 85,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    time: '2022-01-13',
  },
];


export type CityType = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export const CITY: CityType = {
  title: 'Амстердам',
  lat: 52.373057,
  lng: 4.892557,
  zoom: 10,
};

export type OffersPropsType = {
  id: string;
  mark: string;
  imageSrc: string;
  priceValue: number;
  name: string;
  type: string;
  lat: number;
  lng: number;
};

const offers: OffersPropsType[] = [
  {
    id: '1',
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: '2',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 130,
    name: 'Super apartment on the beach',
    type: 'Apartment',
    lat: 52.3609553943508,
    lng: 4.85309666406198,
  },
  {
    id: '3',
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    priceValue: 90,
    name: 'Cheap apartment, suitable for everyone',
    type: 'Apartment',
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: '4',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 70,
    name: 'This is only with us and with Michael Jackson',
    type: 'Apartment',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
];

export { offers };


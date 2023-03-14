export type OffersPropsType = {
  id: string;
  mark: string;
  imageSrc: string;
  priceValue: number;
  name: string;
  type: string;
};

const offers: OffersPropsType[] = [
  {
    id: '1',
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: '2',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 130,
    name: 'Super apartment on the beach',
    type: 'Apartment',
  },
  {
    id: '3',
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    priceValue: 90,
    name: 'Cheap apartment, suitable for everyone',
    type: 'Apartment',
  },
  {
    id: '4',
    mark: 'Premium',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 70,
    name: 'This is only with us and with Michael Jackson',
    type: 'Apartment',
  },
];

export { offers };

import { useState } from 'react';
import Card from '../card/card';
import { OfferType } from '../../types';
import SortOptions from '../sort-options/sort-options';
import Map from '../map/map';
import { useAppSelector } from '../../hooks/redux';

function OfferList({ offers }: { offers: OfferType[] }) {
  const [hoverCard, setHoverCard] = useState<OfferType | null>(null);
  const location = useAppSelector((state) => state.city);
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {location}
        </b>
        <SortOptions />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((item) => (
            <Card
              key={item.id}
              className={'cities'}
              offer={item}
              onHoverCard={setHoverCard}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          className={'cities'}
          offers={offers}
          hoverCard={hoverCard}
          location={location}
        />
      </div>
    </div>
  );
}

export default OfferList;

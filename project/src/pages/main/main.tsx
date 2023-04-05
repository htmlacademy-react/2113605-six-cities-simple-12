import { useState } from 'react';
import { OffersPropsType } from '../../mocks/index';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import SortOptions from '../../components/sort-options/sort-options';
import { useAppSelector } from '../../hooks/redux';
import { getSortingOffers } from '../../utils';

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState<OffersPropsType | null>(null);
  const changeActive = (data: OffersPropsType | null) => setActiveCard(data);

  const activeCity = useAppSelector((state) => state.activeCity);
  const initOffers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = getSortingOffers(activeCity, initOffers, sortType);

  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {activeCity}
              </b>
              <SortOptions />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  isNear={false}
                  offers={offers}
                  setActive={changeActive}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={offers[0]}
                  offers={offers}
                  activeOffer={activeCard}
                  className={'cities__map'}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

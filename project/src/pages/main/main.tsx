import { Helmet } from 'react-helmet-async';
import OfferList from '../../components/offer-list/offer-list';
import CityList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks/redux';
import { getActualOffers } from '../../utils';
import { OfferType } from '../../types';
import MainEmpty from '../main-empty/main-empty';
import { getCity } from '../../store/filter-process/selector';
import { getOffers } from '../../store/offer-process/selector';

const getActualClassName = (arr: OfferType[]) => {
  if (arr.length > 0) {
    return 'page__main page__main--index';
  }
  return 'page__main page__main--index page__main--index-empty';
};

function Main(): JSX.Element {
  const location = useAppSelector(getCity);
  const offersState = useAppSelector(getOffers);
  const offers = getActualOffers(location, offersState);

  return (
    <div className="page page--gray page--main">
      <main className={getActualClassName(offers)}>
        <Helmet>
          <title>six cities simple</title>
        </Helmet>
        <h1 className="visually-hidden">Cities</h1>
        <CityList />
        <div className="cities">
          {offers && offers.length > 0 ? (
            <OfferList isNear={false} offers={offers} />
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;

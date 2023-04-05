import Card from '../card/card';
import { Fragment } from 'react';
import { OffersPropsType } from '../../mocks/index';

function OfferList({
  offers,
  isNear,
  setActive,
}: {
  offers: OffersPropsType[];
  isNear: boolean;
  setActive?: (data: OffersPropsType | null) => void;
}) {
  return (
    <>
      {offers.map((item) => (
        <Fragment key={item.id}>
          <Card isNear={isNear} offer={item} selectOffer={setActive} />
        </Fragment>
      ))}
    </>
  );
}

export default OfferList;

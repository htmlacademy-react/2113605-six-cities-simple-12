import Card from '../card/card';
import { Fragment } from 'react';
import { OffersPropsType } from '../../mocks/index';

function OfferList({
  offers,
  isNear,
}: {
  offers: OffersPropsType[];
  isNear: boolean;
}) {
  return (
    <>
      {offers.map((item) => (
        <Fragment key={item.id}>
          <Card isNear={isNear} offer={item} />
        </Fragment>
      ))}
    </>
  );
}

export default OfferList;

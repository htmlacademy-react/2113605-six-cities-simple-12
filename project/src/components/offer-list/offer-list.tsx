import Card from '../card/card';
import { Fragment } from 'react';
import { OffersPropsType } from '../../mocks/index';

function OfferList({ offers }: { offers: OffersPropsType[] }) {
  return (
    <>
      {offers.map((item) => (
        <Fragment key={item.id}>
          <Card offer={item} />
        </Fragment>
      ))}
    </>
  );
}

export default OfferList;

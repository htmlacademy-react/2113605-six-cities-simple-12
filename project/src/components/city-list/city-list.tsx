import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setCity, updateOffers } from '../../store/action';
import { Cities } from '../../mocks';

function CityList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  const onChangeCity = (city: typeof Cities[number]) => {
    dispatch(setCity({ currentCity: city }));
    dispatch(updateOffers());
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city, index) => {
            const keyValue = `${index}-${city}`;
            const isActive = city === activeCity;

            return (
              <li className="locations__item" key={keyValue}>
                <a
                  className={`locations__item-link tabs__item ${
                    isActive ? 'tabs__item--active' : ''
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    onChangeCity(city);
                  }}
                  href="/"
                >
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CityList;

import { Cities } from '../../consts';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { changeCity } from '../../store/action';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useAppSelector((state) => state.city);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities &&
            Cities.length > 0 &&
            Cities.map((city) => (
              <li key={city} className="locations__item">
                <Link
                  className={cn('locations__item-link tabs__item', {
                    'tabs__item--active': location === city,
                  })}
                  to=""
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(changeCity(city));
                  }}
                >
                  <span>{city}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;

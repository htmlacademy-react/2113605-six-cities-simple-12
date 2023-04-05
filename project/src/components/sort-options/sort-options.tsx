import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortType } from '../../mocks/index';
import { useAppSelector } from '../../hooks/redux';
import { changeSort } from '../../store/action';
import cn from 'classnames';

function SortOptions(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  return (
    <form className="places__sorting" action="#" method="get" onClick={onClickOpen}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {
          Object.entries(SortType).map(([, value]) => (
            <li key={value}
              className={
                cn(
                  'places__option',
                  { 'places__option--active': sortType === value }
                )
              }
              tabIndex={0}
              onClick={() => dispatch(changeSort(value))}
            >
              {value}
            </li>
          ))
        }
      </ul>
    </form >
  );
}

export default SortOptions;

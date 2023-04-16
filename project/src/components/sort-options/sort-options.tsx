import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import cn from 'classnames';
import { SortType } from '../../consts';
import { getSortType } from '../../store/filter-process/selector';
import { changeSortType } from '../../store/filter-process/filter-process';

function SortOptions(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const sortType = useAppSelector(getSortType);

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
              onClick={() => dispatch(changeSortType(value))}
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

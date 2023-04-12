import { Link } from 'react-router-dom';
import { AuthorizationStatus, LocationApp } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { logOutAction } from '../../store/api-actions';

function HeaderNav(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authStatus === AuthorizationStatus.Auth ? (
          <>
            <li className="header__nav-item user">
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  {userData?.email}
                </span>
              </div>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logOutAction());
                }}
                to={LocationApp.Main}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
        ) : (
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={LocationApp.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;

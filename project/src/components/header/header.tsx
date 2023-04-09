import { Link } from 'react-router-dom';
import { LocationApp } from '../../consts';
import { useLocation } from 'react-router-dom';
import HeaderNav from '../header-nav/header-nav';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={LocationApp.Main}
              className="header__logo-link header__logo-link--active"
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {location.pathname !== LocationApp.Login ? <HeaderNav /> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Fragment } from 'react';
import Header from '../../components/header/header';
import HideIcon from '../hide-icon/hide-icon';
import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <Fragment>
      <HideIcon />
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default Layout;

import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/redux';
import HistoryRouter from '../history-router/history-router';
import MainPage from '../../pages/main/main';
import { default as LoginScreen } from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { LocationApp } from '../../consts';
import browserHistory from '../../browser-history';
import Loader from '../loader/loader';
import {getOfferStatus} from '../../store/offer-process/selector';

function App(): JSX.Element {
  const isOfferLoading = useAppSelector(getOfferStatus);

  if (!isOfferLoading) {
    return (
      <Loader />
    );
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={LocationApp.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={LocationApp.Login} element={<LoginScreen />} />
            <Route path={`${LocationApp.Offer}:id`} element={<Property />} />
            <Route path={LocationApp.notFound} element={<NotFound />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

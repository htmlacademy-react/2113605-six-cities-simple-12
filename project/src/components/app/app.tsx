import MainPage from '../../pages/main/main';
import { default as LoginScreen } from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { offers } from '../../mocks/index';
import { reviews } from '../../mocks/index';
import { Provider } from 'react-redux';
import { store } from '../../store';

export enum LocationApp {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={LocationApp.Main} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={LocationApp.Login} element={<LoginScreen />} />
            <Route
              path={LocationApp.Room}
              element={
                <Property
                  similarOffers={offers}
                  offers={offers}
                  reviews={reviews}
                  city={offers[0]}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import MainPage from '../../pages/main/main';
import { default as LoginScreen } from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { offers, CITY } from '../../mocks/index';
import { reviews } from '../../mocks/index';

export enum LocationApp {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LocationApp.Main} element={<Layout />}>
          <Route index element={<MainPage offers={offers} city={CITY} />} />
          <Route path={LocationApp.Login} element={<LoginScreen />} />
          <Route
            path={LocationApp.Room}
            element={
              <Property
                similarOffers={offers}
                offers={offers}
                reviews={reviews}
                city={CITY}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

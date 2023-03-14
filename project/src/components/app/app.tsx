import MainPage from '../../pages/main/main';
import { default as LoginScreen } from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { offers } from '../../mocks/offers';

export enum Location {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Location.Main} element={<Layout />}>
          <Route index element={<MainPage offers={offers}/>} />
          <Route path={Location.Login} element={<LoginScreen />} />
          <Route path={Location.Room} element={<Property />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

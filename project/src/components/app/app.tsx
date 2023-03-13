import MainPage from '../../pages/main/main';
import { default as LoginScreen } from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type AppProps = {
  offersCount: number;
};

enum Location {
  Main = '/',
  Login = '/login',
  Room = '/offer/:id',
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Location.Main} element={<Layout />}>
          <Route index element={<MainPage offersCount={offersCount} />} />
          <Route path={Location.Login} element={<LoginScreen />} />
          <Route path={Location.Room} element={<Property />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

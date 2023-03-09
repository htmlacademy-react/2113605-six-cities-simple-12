import MainPage from '../../pages/main-page/main-page';
import Login from '../../pages/login/login';
import { default as Room } from '../../pages/property/property';
import NotFound from '../../pages/not-found/not-found';
import Layout from '../../components/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type AppProps = {
  offersCount: number;
};

enum Location {
  main = '/',
  login = '/login',
  room = '/offer/',
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Location.main} element={<Layout />}>
          <Route index element={<MainPage offersCount={offersCount} />} />
          <Route path={Location.login} element={<Login />} />
          <Route path={`${Location.room}:id`} element={<Room />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

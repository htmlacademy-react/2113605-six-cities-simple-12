import { Link } from 'react-router-dom';
import { Location } from '../../components/app/app';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main">
        <section style={{ padding: '20px' }}>
          <h1>404 Not found</h1>
          <p>
            Настоятельно рекомендую вернуться
            <Link to={Location.Main}>
              <b>на главную страницу!</b>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default NotFound;

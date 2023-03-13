import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main">
        <section style={{padding: '20px'}}>
          <h1>404 Not found</h1>
          <p>
            Настоятельно рекомендую вернуться на
            <Link to={'/'}>
              <b> главную </b>
            </Link>
            страницу!
          </p>
        </section>
      </main>
    </div>
  );
}

export default NotFound;

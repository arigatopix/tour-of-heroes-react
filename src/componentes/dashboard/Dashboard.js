import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeroContext } from '../../store/hero/hero-context';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  const { loading, heroes, getHeroes } = useContext(HeroContext);

  useEffect(() => {
    getHeroes();
  }, []);

  const hero = heroes
    .map(hero => {
      return (
        <Link
          key={hero.id}
          className={`${classes.hero} m2 p-4 text-decoration-none`}
          to={`/heroes-form/${hero.id}`}
        >
          {hero.name}
        </Link>
      );
    })
    .slice(0, 5);

  return (
    <>
      <h4>Top Heroes</h4>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="my-2 d-flex justify-content-around heroes">{hero}</div>
      )}
    </>
  );
};

export default Dashboard;

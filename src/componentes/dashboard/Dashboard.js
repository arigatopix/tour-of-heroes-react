import { Link } from 'react-router-dom';
import { heroes } from '../mock-heroes';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  const hero = heroes
    .map(hero => {
      return (
        <Link
          className={`${classes.hero} m2 p-4 text-decoration-none`}
          to={`/hero-form/${hero.id}`}
        >
          {hero.name}
        </Link>
      );
    })
    .slice(0, 5);

  return (
    <>
      <h4>Top Heroes</h4>
      <div className="my-2 d-flex justify-content-around heroes">{hero}</div>
    </>
  );
};

export default Dashboard;

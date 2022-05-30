import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import HeroList from './HeroList';
import { HeroContext } from '../../store/hero/hero-context';

const Heroes = () => {
  const heroContext = useContext(HeroContext);

  const { heroes, loading, getHeroes } = heroContext;

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between my-2">
        <h4>
          My Heroes <i className="shield-shaded"></i>
        </h4>

        <Link to="/heroes-form" className="btn btn-primary">
          Add
        </Link>
      </div>
      <hr />
      <ul>
        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <HeroList heroes={heroes} />
        )}
      </ul>
    </>
  );
};

export default Heroes;

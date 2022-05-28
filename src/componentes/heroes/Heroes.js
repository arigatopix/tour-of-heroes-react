import { Link } from 'react-router-dom';
import HeroList from './HeroList';

const Heroes = () => {
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
        <HeroList />
      </ul>
    </>
  );
};

export default Heroes;

import { Link } from 'react-router-dom';
import classes from './HeroListItem.module.css';

const HeroListItem = ({ hero }) => {
  const onDeleteHandler = () => {
    console.log('Deleted hero id ', hero.id);
  };

  return (
    <li className="list-group-item list-group-item-action">
      <div className="d-flex justify-content-between">
        <Link to={`/heroes-form/${hero.id}`} className="text-decoration-none">
          <span className={classes.badge}>{hero.id}</span> {hero.name}
        </Link>
        <button className="btn btn-danger btn-sm" onClick={onDeleteHandler}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default HeroListItem;

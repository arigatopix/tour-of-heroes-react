import { Link } from 'react-router-dom';
import classes from './HeroListItem.module.css';

const HeroListItem = ({ hero }) => {
  const onDeleteHandler = () => {
    console.log(hero.id);
  };

  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={onDeleteHandler}
    >
      <div className="d-flex justify-content-between">
        <Link to={`/heroes-form/${hero.id}`} className="text-decoration-none">
          <span className={classes.badge}>{hero.id}</span> {hero.name}
        </Link>
        <div className="btn btn-danger btn-sm">
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </li>
  );
};

export default HeroListItem;

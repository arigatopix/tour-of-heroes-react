import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './HeroListItem.module.css';
import { HeroContext } from '../../store/hero/hero-context';

const HeroListItem = ({ hero }) => {
  const heroContext = useContext(HeroContext);

  const { deleteHero } = heroContext;

  const onDeleteHandler = () => {
    deleteHero(hero.id);
  };

  return (
    <li className="list-group-item list-group-item-action">
      <div className="d-flex justify-content-between">
        <Link to={`/heroes-form/${hero.id}`} className="text-decoration-none">
          <span className={classes.badge}>{hero.id}</span> {hero.name}
        </Link>
        <div className="btn btn-danger btn-sm" onClick={onDeleteHandler}>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </li>
  );
};

export default HeroListItem;

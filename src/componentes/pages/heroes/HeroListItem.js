import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './HeroListItem.module.css';
import { HeroContext } from '../../../store/hero/hero-context';

const HeroListItem = ({ hero }) => {
  const heroContext = useContext(HeroContext);

  const { deleteHero, setCurrent } = heroContext;

  const onDeleteHandler = () => {
    deleteHero(hero.id);
  };

  const onClickHandler = () => {
    setCurrent(hero);
  };

  return (
    <li
      key={hero.id}
      className="list-group-item list-group-item-action"
      onClick={onClickHandler}
    >
      <div className="d-flex justify-content-between">
        <Link to={`/heroes-form/${hero.id}`} className="text-decoration-none">
          <span className={classes.badge}>{String(hero.id).slice(0, 4)}</span>{' '}
          {hero.name}
        </Link>
        <div className="btn btn-danger btn-sm" onClick={onDeleteHandler}>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </li>
  );
};

export default HeroListItem;

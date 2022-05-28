import classes from './HeroListItem.module.css';

const HeroListItem = ({ heroes }) => {
  return heroes.map(hero => (
    <li className="list-group-item list-group-item-action" key={hero.id}>
      <div className="d-flex justify-content-between">
        <div>
          <span className={classes.badge}>{hero.id}</span> {hero.name}
        </div>
        <div class="btn btn-danger btn-sm">
          <i class="bi bi-trash"></i>
        </div>
      </div>
    </li>
  ));
};

export default HeroListItem;

import HeroListItem from './HeroListItem';
import { heroes } from '../mock-heroes';

const HeroList = () => {
  const heroListItem = heroes.map(hero => {
    return <HeroListItem hero={hero} key={hero.id} />;
  });
  return <ul className="list-group">{heroListItem}</ul>;
};

export default HeroList;

import HeroListItem from './HeroListItem';
import { heroes } from '../mock-heroes';

const HeroList = () => {
  return (
    <ul className="list-group">
      <HeroListItem heroes={heroes} />
    </ul>
  );
};

export default HeroList;

import HeroListItem from './HeroListItem';

const HeroList = ({ heroes }) => {
  const heroListItem = heroes.map(hero => {
    return <HeroListItem hero={hero} key={hero.id} />;
  });
  return <ul className="list-group">{heroListItem}</ul>;
};

export default HeroList;

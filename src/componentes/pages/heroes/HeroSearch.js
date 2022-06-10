import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// รับผลการพิมพ์
// ส่งไปให้ Dashboard ผ่าน props

const HeroSearch = props => {
  const [enteredSearch, setEnteredSearch] = useState('');

  const onSearchHandler = e => {
    const inputValue = e.target.value;
    setEnteredSearch(inputValue);
  };

  const searchHeroes = props.heroes.filter(hero => {
    return hero.name.toLowerCase().includes(enteredSearch.toLowerCase());
  });

  const renderList =
    enteredSearch.trim() !== ''
      ? searchHeroes.map(hero => (
          <li key={hero.id}>
            <Link className="list-group-item" to={`/heroes-form/${hero.id}`}>
              {hero.name}
            </Link>
          </li>
        ))
      : '';

  return (
    <div>
      <label htmlFor="term">Hero Search</label>
      <input
        type="text"
        id="term"
        onChange={onSearchHandler}
        value={enteredSearch}
        className="form-control"
      />

      <ul className="list-group">{renderList}</ul>
    </div>
  );
};

export default HeroSearch;

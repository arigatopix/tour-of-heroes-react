import React from 'react';
import { Link } from 'react-router-dom';

const hero = { id: null, name: '' };

const HeroSearch = () => {
  return (
    <div>
      <label for="term">Hero Search</label>
      <input type="text" id="term" class="form-control" />

      <ul class="list-group">
        <Link class="list-group-item" to={`/hero-form/${hero.id}`}>
          {hero.name}
        </Link>
      </ul>
    </div>
  );
};

export default HeroSearch;

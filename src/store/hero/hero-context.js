import { createContext, useReducer } from 'react';
import { GET_HEROES } from '../types';
import HeroReducer from './HeroReducer';

const initialState = {
  heroes: [],
};

export const HeroContext = createContext(initialState);

const HeroContextProvider = props => {
  const [state, dispatch] = useReducer(HeroReducer, initialState);

  const basedUrl = 'http://localhost:5000';

  const getHeroes = async () => {
    const res = await fetch(`${basedUrl}/heroes`);

    const heroes = await res.json();

    dispatch({ type: GET_HEROES, payload: heroes });
  };

  const context = {
    heroes: state.heroes,
    getHeroes,
  };

  return (
    <HeroContext.Provider value={context}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;

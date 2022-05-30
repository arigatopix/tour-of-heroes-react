import { createContext, useReducer } from 'react';
import { GET_HEROES } from '../types';
import HeroReducer from './HeroReducer';

const initialState = [];

export const HeroContext = createContext(initialState);

const HeroContextProvider = props => {
  const [heroes, dispatch] = useReducer(HeroReducer, []);

  const basedUrl = 'http://localhost:5000';

  const getHeroes = () => {
    const heroes = fetch(`${basedUrl}/heroes`);

    dispatch({ type: GET_HEROES, payload: heroes });
  };

  const context = {
    heroes,
    getHeroes,
  };

  return (
    <HeroContext.Provider value={context}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;

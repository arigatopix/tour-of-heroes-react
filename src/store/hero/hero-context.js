import { createContext, useReducer } from 'react';
import {
  CREATE_HERO,
  UPDATE_HERO,
  DELETE_HERO,
  GET_HEROES,
  SET_LOADING,
} from '../types';
import HeroReducer from './HeroReducer';

const initialState = {
  loading: false,
  heroes: [],
  getHeroes: () => {},
  updateHero: () => {},
  createHero: () => {},
  deleteHero: () => {},
};

export const HeroContext = createContext(initialState);

const HeroContextProvider = props => {
  const [state, dispatch] = useReducer(HeroReducer, initialState);

  const basedUrl = 'http://localhost:5000';

  const getHeroes = async () => {
    setLoading();

    const res = await fetch(`${basedUrl}/heroes`);

    const heroes = await res.json();

    dispatch({ type: GET_HEROES, payload: heroes });
  };

  const updateHero = async hero => {
    setLoading();

    const res = await fetch(
      `${basedUrl}/heroes/${hero.id}`,
      {
        'Content-Type': 'application-json',
        method: 'PUT',
      },
      hero
    );

    const updatedHero = await res.json();

    dispatch({ type: UPDATE_HERO, payload: updatedHero });
  };

  const createHero = async hero => {
    setLoading();

    const res = await fetch(
      `${basedUrl}/heroes`,
      {
        'Content-Type': 'application-json',
        method: 'POST',
      },
      hero
    );

    const cretedHero = await res.json();

    dispatch({ type: CREATE_HERO, payload: cretedHero });
  };

  const deleteHero = async id => {
    setLoading();

    const res = await fetch(`${basedUrl}/heroes/${id}`, {
      method: 'DELETE',
    });

    await res.json();

    dispatch({ type: DELETE_HERO, payload: id });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const context = {
    heroes: state.heroes,
    loading: state.loading,
    getHeroes,
    updateHero,
    createHero,
    deleteHero,
  };

  return (
    <HeroContext.Provider value={context}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;

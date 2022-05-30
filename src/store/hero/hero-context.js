import { createContext, useReducer } from 'react';
import {
  GET_HERO,
  CREATE_HERO,
  UPDATE_HERO,
  DELETE_HERO,
  GET_HEROES,
  SET_LOADING,
  SET_CURRETN_HERO,
  CLEAR_CURRENT_HERO,
} from '../types';
import HeroReducer from './HeroReducer';

const initialState = {
  loading: false,
  heroes: [],
  current: {},
  getHero: () => {},
  getHeroes: () => {},
  updateHero: () => {},
  createHero: () => {},
  deleteHero: () => {},
  setCurrent: () => {},
  clearCurrent: () => {},
};

export const HeroContext = createContext(initialState);

const HeroContextProvider = props => {
  const [state, dispatch] = useReducer(HeroReducer, initialState);

  const basedUrl = 'http://localhost:5000';

  const getHero = async id => {
    setLoading();

    const res = await fetch(`${basedUrl}/heroes/${id}`);

    const hero = await res.json();

    dispatch({ type: GET_HERO, payload: hero });
  };

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

  const setCurrent = hero => {
    dispatch({ type: SET_CURRETN_HERO, payload: hero });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_HERO, payload: {} });
  };

  const context = {
    heroes: state.heroes,
    loading: state.loading,
    current: state.current,
    getHero,
    getHeroes,
    updateHero,
    createHero,
    deleteHero,
    setCurrent,
    clearCurrent,
  };

  return (
    <HeroContext.Provider value={context}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;

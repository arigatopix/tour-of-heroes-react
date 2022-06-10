import React, { createContext, useReducer, useCallback } from 'react';
import {
  GET_HERO,
  CREATE_HERO,
  UPDATE_HERO,
  DELETE_HERO,
  GET_HEROES,
  SET_LOADING,
  SET_CURRENT_HERO,
  CLEAR_CURRENT_HERO,
  SET_ERROR,
} from '../types';
import HeroReducer from './HeroReducer';

const initialState = {
  loading: false,
  heroes: [],
  current: {},
  error: '',
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
    try {
      const res = await fetch(`${basedUrl}/heroes/${id}`);

      const hero = await res.json();

      dispatch({ type: GET_HERO, payload: hero });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  const getHeroes = useCallback(async () => {
    setLoading();

    try {
      const res = await fetch(`${basedUrl}/heroes`);

      const heroes = await res.json();

      dispatch({ type: GET_HEROES, payload: heroes });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  }, [dispatch]);

  const updateHero = async hero => {
    setLoading();
    try {
      const res = await fetch(`${basedUrl}/heroes/${hero.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });

      const updatedHero = await res.json();

      dispatch({ type: UPDATE_HERO, payload: updatedHero });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  const createHero = async hero => {
    setLoading();

    try {
      const res = await fetch(`${basedUrl}/heroes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });

      const cretedHero = await res.json();

      dispatch({ type: CREATE_HERO, payload: cretedHero });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  const deleteHero = async id => {
    setLoading();

    try {
      const res = await fetch(`${basedUrl}/heroes/${id}`, {
        method: 'DELETE',
      });

      await res.json();

      dispatch({ type: DELETE_HERO, payload: id });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err });
    }
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const setCurrent = hero => {
    dispatch({ type: SET_CURRENT_HERO, payload: hero });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_HERO, payload: {} });
  };

  const context = {
    heroes: state.heroes,
    loading: state.loading,
    current: state.current,
    error: state.error,
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

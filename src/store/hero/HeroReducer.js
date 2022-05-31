import {
  GET_HERO,
  GET_HEROES,
  UPDATE_HERO,
  CREATE_HERO,
  DELETE_HERO,
  SET_LOADING,
  SET_CURRENT_HERO,
  CLEAR_CURRENT_HERO,
  SET_ERROR,
  CLEAR_ERROR,
} from '../types';
const HeroReducer = (currentState, action) => {
  switch (action.type) {
    case GET_HERO:
      return {
        ...currentState,
        loading: false,
        hero: action.payload,
      };
    case GET_HEROES:
      return { ...currentState, heroes: action.payload, loading: false };
    case UPDATE_HERO:
      return {
        ...currentState,
        heroes: [
          ...currentState.heroes.filter(hero => {
            return hero.id !== action.payload.id;
          }),
          action.payload,
        ],
        loading: false,
      };
    case CREATE_HERO:
      return {
        ...currentState,
        loading: false,
        heroes: [...currentState.heroes, action.payload],
      };
    case DELETE_HERO:
      return {
        ...currentState,
        loading: false,
        heroes: currentState.heroes.filter(hero => hero.id !== action.payload),
      };
    case SET_LOADING:
      return { ...currentState, loading: true };
    case SET_CURRENT_HERO:
      return { ...currentState, current: action.payload };
    case CLEAR_CURRENT_HERO:
      return { ...currentState, current: action.payload };
    case SET_ERROR:
      return { ...currentState, error: action.payload, loading: false };
    case CLEAR_ERROR:
      return { ...currentState, error: '' };
    default:
      throw new Error('Error at Hero Reducer');
  }
};

export default HeroReducer;

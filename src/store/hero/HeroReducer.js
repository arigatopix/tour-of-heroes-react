import {
  GET_HERO,
  GET_HEROES,
  UPDATE_HERO,
  CREATE_HERO,
  DELETE_HERO,
  SET_LOADING,
  SET_CURRETN_HERO,
  CLEAR_CURRENT_HERO,
} from '../types';
const HeroReducer = (currentState, action) => {
  switch (action.type) {
    case GET_HERO:
      return {
        ...currentState,
        loading: false,
        heroes: currentState.heroes.filter(
          hero => hero.id !== action.payload.id
        ),
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
        heroes: [...currentState.heres, action.payload],
      };
    case DELETE_HERO:
      return {
        ...currentState,
        loading: false,
        heroes: [
          ...currentState.heroes,
          currentState.heroes.filter(heroId => heroId !== action.payload),
        ],
      };
    case SET_LOADING:
      return { ...currentState, loading: true };
    case SET_CURRETN_HERO:
      return { ...currentState, current: action.payload };
    case CLEAR_CURRENT_HERO:
      return { ...currentState, current: action.payload };
    default:
      throw new Error('Error at Hero Reducer');
  }
};

export default HeroReducer;

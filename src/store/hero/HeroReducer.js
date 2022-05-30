import { GET_HEROES, UPDATE_HERO, CREATE_HERO, DELETE_HERO } from '../types';
const HeroReducer = (currentState, action) => {
  switch (action.type) {
    case GET_HEROES:
      return { currentState, hereos: action.payload };
    case UPDATE_HERO:
      return {};
    case CREATE_HERO:
      return {};
    case DELETE_HERO:
      return {};
    default:
      throw new Error('Error at Hero Reducer');
  }
};

export default HeroReducer;

import { createContext } from 'react';

const initialState = {};

export const HeroContext = createContext(initialState);

const HeroContextProvider = props => {
  const context = {};

  return (
    <HeroContext.Provider value={context}>
      {props.children}
    </HeroContext.Provider>
  );
};

export default HeroContextProvider;

import * as React from 'react';
import { SelectedNumbersContext } from './context';
import { initialState, selectedNumbersReducer } from './reducer';

export const SelectedNumbersProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = React.useReducer(selectedNumbersReducer, initialState);

  return <SelectedNumbersContext.Provider value={{ state, dispatch }}>{children}</SelectedNumbersContext.Provider>;
};

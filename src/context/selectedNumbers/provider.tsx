import * as React from 'react';
import { SelectedNumbersContext } from './context';
import { initialSelectedNumbers, selectedNumbersReducer } from './reducer';

export const SelectedNumbersProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = React.useReducer(selectedNumbersReducer, initialSelectedNumbers);

  return <SelectedNumbersContext.Provider value={{ state, dispatch }}>{children}</SelectedNumbersContext.Provider>;
};

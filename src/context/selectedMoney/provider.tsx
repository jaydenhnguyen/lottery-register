import * as React from 'react';
import { SelectedMoneyContext } from './context';
import { initialSelectedMoney, selectedMoneyReducer } from './reducer';

export const SelectedMoneyProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = React.useReducer(selectedMoneyReducer, initialSelectedMoney);

  return <SelectedMoneyContext.Provider value={{ state, dispatch }}>{children}</SelectedMoneyContext.Provider>;
};

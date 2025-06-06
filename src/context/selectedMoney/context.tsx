import * as React from 'react';
import { SelectedMoneyAction, SelectedMoneyState } from './type';

type ContextType = {
  state: SelectedMoneyState;
  dispatch: React.Dispatch<SelectedMoneyAction>;
};
export const SelectedMoneyContext = React.createContext<ContextType | undefined>(undefined);

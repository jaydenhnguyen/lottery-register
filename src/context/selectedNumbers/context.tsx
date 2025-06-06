import * as React from 'react';
import { SelectedNumbersAction, SelectedNumbersState } from './types';

type ContextType = {
  state: SelectedNumbersState;
  dispatch: React.Dispatch<SelectedNumbersAction>;
};

export const SelectedNumbersContext = React.createContext<ContextType | undefined>(undefined);

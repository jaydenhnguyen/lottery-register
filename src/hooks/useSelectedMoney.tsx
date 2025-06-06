import * as React from 'react';
import { SelectedMoneyContext } from 'src/context/selectedMoney';

export const useSelectedMoney = () => {
  const context = React.useContext(SelectedMoneyContext);
  if (!context) {
    throw new Error('useSelectedMoney must be used within the context');
  }
  return context;
};

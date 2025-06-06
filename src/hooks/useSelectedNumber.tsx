import * as React from 'react';
import { SelectedNumbersContext } from 'src/context/selectedNumbers';

export const useSelectedNumber = () => {
  const context = React.useContext(SelectedNumbersContext);
  if (!context) {
    throw new Error('useSelectedNumber must be used within SelectedNumberProvider');
  }
  return context;
};

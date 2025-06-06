import * as React from 'react';
import { useSelectedNumber } from 'src/hooks';
import { SelectedNumbersActionType } from 'src/context/selectedNumbers/types';
import { NumberButton } from '../NumberButton';
import classes from './NumberGrid.module.scss';

const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

export function NumberGrid(): React.ReactElement {
  const {
    state: { selectedNumbers },
    dispatch,
  } = useSelectedNumber();

  const handleUnSelect = React.useCallback(
    (selectingValue: number) => {
      const newSelectedNumbers = selectedNumbers.filter((n) => n !== selectingValue);
      dispatch({ type: SelectedNumbersActionType.SET_NUMBERS, payload: newSelectedNumbers });
    },
    [dispatch, selectedNumbers],
  );

  const handleSelect = React.useCallback(
    (selectingValue: number) => {
      if (selectedNumbers.length >= 5) {
        alert('You can only select 5 numbers!');
        return;
      }
      dispatch({ type: SelectedNumbersActionType.SET_NUMBERS, payload: [...selectedNumbers, selectingValue] });
    },
    [dispatch, selectedNumbers],
  );

  const handleOnSelected = React.useCallback(
    (selectingValue: number) => {
      if (selectedNumbers.includes(selectingValue)) handleUnSelect(selectingValue);
      else handleSelect(selectingValue);
    },
    [handleSelect, handleUnSelect, selectedNumbers],
  );

  return (
    <div className={classes['wrapper']}>
      {numbers.map((number, idx) => {
        return <NumberButton key={`N_${number}_${idx}`} onSelect={handleOnSelected} numberValue={number} />;
      })}
    </div>
  );
}

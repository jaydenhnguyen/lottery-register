import * as React from 'react';
import { useSelectedNumber } from 'src/hooks';
import { SelectedNumbersActionType } from 'src/context/selectedNumbers/types';
import { NumberButton } from '../NumberButton';
import classes from './NumberGrid.module.scss';

export function NumberGrid(): React.ReactElement {
  const {
    state: { selectedNumbers },
    dispatch,
  } = useSelectedNumber();
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleOnSelected = React.useCallback(
    (selectingValue: number) => {
      if (selectedNumbers.includes(selectingValue)) {
        const newSelectedNumbers = selectedNumbers.filter((n) => n !== selectingValue);
        dispatch({ type: SelectedNumbersActionType.SET_NUMBERS, payload: newSelectedNumbers });
      } else {
        if (selectedNumbers.length >= 5) {
          alert('You can only select 5 numbers!');
          return;
        }
        dispatch({ type: SelectedNumbersActionType.SET_NUMBERS, payload: [...selectedNumbers, selectingValue] });
      }
    },
    [dispatch, selectedNumbers],
  );

  return (
    <div className={classes['wrapper']}>
      {numbers.map((number, idx) => {
        return <NumberButton key={`${number}_${idx}`} onSelect={handleOnSelected} numberValue={number} />;
      })}
    </div>
  );
}

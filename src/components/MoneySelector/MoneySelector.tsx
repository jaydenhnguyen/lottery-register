import * as React from 'react';
import { useSelectedMoney } from 'src/hooks';
import { SelectedMoneyActionType } from 'src/context/selectedMoney/type';
import { MoneyButton } from '../MoneyButton';
import classes from './MoneySelector.module.scss';

const moneyValues = [1, 5, 10, 20, 50, 100];

type Props = {
  maxAmount: number;
};

export function MoneySelector({ maxAmount }: Props): React.ReactElement {
  const { dispatch } = useSelectedMoney();

  const handleClickMoney = React.useCallback(
    (selectingValue: number) => {
      dispatch({ type: SelectedMoneyActionType.ADD_MONEY, payload: { amount: selectingValue } });
    },
    [dispatch],
  );

  return (
    <div className={classes['wrapper']}>
      {moneyValues.map((value, idx) => (
        <MoneyButton key={`M_${value}_${idx}`} maxAmount={maxAmount} moneyValue={value} onClick={handleClickMoney} />
      ))}
    </div>
  );
}

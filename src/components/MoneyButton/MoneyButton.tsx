import * as React from 'react';
import classNames from 'classnames';
import {useSelectedMoney, useSelectedNumber} from 'src/hooks';
import classes from './MoneyButton.module.scss';

type Props = {
  maxAmount: number;
  moneyValue: number;
  onClick: (value: number) => void;
};

export function MoneyButton({maxAmount, moneyValue, onClick}: Props): React.ReactElement {
  const {
    state: {total: totalSelectedAmount},
  } = useSelectedMoney();


  const {state: {selectedNumbers}} = useSelectedNumber()

  const isDisabled = React.useMemo(
    () => {
      const isSelectEnoughNumber = selectedNumbers.length === 5;
      return !isSelectEnoughNumber || totalSelectedAmount + moneyValue > maxAmount
    },
    [maxAmount, moneyValue, selectedNumbers.length, totalSelectedAmount],
  );
  return (
    <button
      className={classNames(classes['wrapper'], isDisabled ? classes['disabled'] : classes['enabled'])}
      disabled={isDisabled}
      onClick={() => onClick(moneyValue)}
    >
      ${moneyValue}
    </button>
  );
}

import * as React from 'react';
import classNames from 'classnames';
import { useSelectedMoney } from 'src/hooks';
import classes from './MoneyButton.module.scss';

type Props = {
  maxAmount: number;
  moneyValue: number;
  onClick: (value: number) => void;
};

export function MoneyButton({ maxAmount, moneyValue, onClick }: Props): React.ReactElement {
  const {
    state: { total: totalSelectedAmount },
  } = useSelectedMoney();

  const isDisabled = React.useMemo(
    () => totalSelectedAmount + moneyValue > maxAmount,
    [maxAmount, moneyValue, totalSelectedAmount],
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

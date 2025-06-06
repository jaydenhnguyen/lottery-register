import * as React from 'react';
import classNames from 'classnames';
import { useSelectedMoney, useSelectedNumber } from 'src/hooks';
import { SelectedNumbersActionType } from 'src/context/selectedNumbers/types';
import { SelectedMoneyActionType } from 'src/context/selectedMoney/type';
import classes from './ActionButtons.module.scss';

type Props = {
  setMaxAmount: (maxAmount: number) => void;
  setIsShowCashModal: (val: boolean) => void;
  setIsShowAskingModal: (val: boolean) => void;
};

export function ActionButtons({ setMaxAmount, setIsShowCashModal, setIsShowAskingModal }: Props): React.ReactElement {
  const {
    state: { selectedNumbers },
    dispatch: dispatchSelectedNumber,
  } = useSelectedNumber();

  const {
    state: { total: totalAmount },
    dispatch: dispatchSelectedMoney,
  } = useSelectedMoney();

  const onClear = React.useCallback(() => {
    dispatchSelectedNumber({ type: SelectedNumbersActionType.CLEAR_NUMBERS });
    dispatchSelectedMoney({ type: SelectedMoneyActionType.CLEAR_MONEY });
    setMaxAmount(0);
  }, [dispatchSelectedMoney, dispatchSelectedNumber, setMaxAmount]);

  const onRandom = React.useCallback(() => {
    const numbers: number[] = [];
    while (numbers.length < 5) {
      const randomNum = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    dispatchSelectedNumber({ type: SelectedNumbersActionType.SET_NUMBERS, payload: numbers });
    dispatchSelectedMoney({ type: SelectedMoneyActionType.CLEAR_MONEY });
    setMaxAmount(0);
  }, [dispatchSelectedMoney, dispatchSelectedNumber, setMaxAmount]);

  const onCash = React.useCallback(() => {
    if (selectedNumbers.length < 5) {
      alert('You must select 5 numbers!');
      return;
    }
    if (totalAmount === 0) {
      alert('You must assign a money value!');
      return;
    }
    setIsShowCashModal(true);
  }, [selectedNumbers.length, setIsShowCashModal, totalAmount]);

  return (
    <div className={classes['action-btn-wrapper']}>
      <div className={classes['btn-grid']}>
        <button onClick={onClear} className={classNames(classes['btn'], classes['clear-btn'])}>
          Clear All
        </button>

        <button onClick={onRandom} className={classNames(classes['btn'], classes['random-btn'])}>
          Random Numbers
        </button>

        <button onClick={onCash} className={classNames(classes['btn'], classes['cash-btn'])}>
          Cash
        </button>

        <button
          onClick={() => setIsShowAskingModal(true)}
          className={classNames(classes['btn'], classes['asking-btn'])}
        >
          Asking Customer
        </button>
      </div>
    </div>
  );
}

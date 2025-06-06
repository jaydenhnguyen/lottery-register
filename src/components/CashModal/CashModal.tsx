import * as React from 'react';
import Modal from 'react-modal';
import { useSelectedMoney, useSelectedNumber } from 'src/hooks';
import { SelectedMoneyActionType } from 'src/context/selectedMoney/type';
import { SelectedNumbersActionType } from 'src/context/selectedNumbers/types';
import classes from './CashModal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  setMaxAmount: (value: number) => void;
};

export function CashModal({ isOpen, onClose, setMaxAmount }: Props): React.ReactElement {
  const {
    state: { selectedNumbers },
    dispatch: dispatchSelectedNumber,
  } = useSelectedNumber();

  const {
    state: { total: totalAmount },
    dispatch: dispatchSelectedMoney,
  } = useSelectedMoney();

  const handleClose = React.useCallback(() => {
    dispatchSelectedNumber({ type: SelectedNumbersActionType.CLEAR_NUMBERS });
    dispatchSelectedMoney({ type: SelectedMoneyActionType.CLEAR_MONEY });
    setMaxAmount(0);
    onClose();
  }, [dispatchSelectedMoney, dispatchSelectedNumber, onClose, setMaxAmount]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Ticket Generated"
      className={classes['modal']}
      overlayClassName={classes['overlay']}
    >
      <div className={classes['content']}>
        <h2 className={classes['title']}>Ticket Generated!</h2>

        <div className={classes['ticket']}>
          <h3 className={classes['ticket-title']}>WHE WHE Lottery Ticket</h3>

          <div className={classes['ticket-content']}>
            <div className={classes['numbers-section']}>
              <span className={classes['label']}>Selected Numbers:</span>
              <div className={classes['numbers-display']}>
                {selectedNumbers
                  .sort((a, b) => a - b)
                  .map((number) => (
                    <span key={number} className={classes['number-badge']}>
                      {number}
                    </span>
                  ))}
              </div>
            </div>

            <div className={classes['amount-section']}>
              <span className={classes['label']}>Ticket Value:</span>
              <div className={classes['ticket-value']}>${totalAmount.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <button onClick={handleClose} className={classes['close-btn']}>
          Close
        </button>
      </div>
    </Modal>
  );
}

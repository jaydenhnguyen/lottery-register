import * as React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';
import classes from './MoneyInputModal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: number) => void;
};

export function MoneyInputModal({ isOpen, onClose, onSubmit }: Props): React.ReactElement {
  const [amount, setAmount] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const closingModal = React.useCallback(() => {
    setAmount('');
    setError('');
    onClose();
  }, [onClose]);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const numAmount = Number.parseFloat(amount);
      if (isNaN(numAmount) || numAmount <= 0) {
        setError('Please enter a valid amount greater than 0');
        return;
      }

      onSubmit(numAmount);
      closingModal();
    },
    [amount, closingModal, onSubmit],
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closingModal}
      contentLabel="Enter Money Amount"
      className={classes['modal-wrapper']}
      overlayClassName={classes['overlay']}
    >
      <div className={classes['modal-content']}>
        <h2 className={classes['modal-title']}>Enter Money Amount</h2>
        <p className={classes['modal-description']}>How much money would the customer like to play?</p>

        <form onSubmit={handleSubmit} className={classes['form-wrapper']}>
          <div className={classes['input-group']}>
            <label htmlFor="amount" className={classes['field-label']}>
              Amount ($):
            </label>

            <div className={classes['input-money-wrapper']}>
              <span className={classes['currency-symbol']}>$</span>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={classes['input-money']}
                placeholder="0.00"
                step="0.01"
                min="0.01"
                required
                autoFocus
              />
            </div>

            {error && <p className={classes['error-text']}>{error}</p>}
          </div>

          <div className={classes['btb-group']}>
            <button type="button" onClick={closingModal} className={classNames(classes['btn'], classes['cancel-btn'])}>
              Cancel
            </button>

            <button type="submit" className={classNames(classes['btn'], classes['submit-btn'])}>
              Confirm
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

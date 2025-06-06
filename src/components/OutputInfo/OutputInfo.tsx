import * as React from 'react';
import classes from './OutputInfo.module.scss';
import { useSelectedMoney, useSelectedNumber } from 'src/hooks';

type Props = {
  maxAmount: number;
};

export function OutputInfo({ maxAmount }: Props): React.ReactElement {
  const {
    state: { selectedNumbers },
  } = useSelectedNumber();

  const {
    state: { total: selectedAmount },
  } = useSelectedMoney();

  return (
    <div className={classes['output-info-wrapper']}>
      <h2 className={classes['title']}>Numbers Selected</h2>

      <div className={classes['content']}>
        <div className={classes['section']}>
          <h3 className={classes['section-title']}>Selected Numbers:</h3>
          <div className={classes['numbers-container']}>
            {selectedNumbers.length > 0 ? (
              selectedNumbers
                .sort((a, b) => a - b)
                .map((number) => (
                  <span key={number} className={classes['number-badge']}>
                    {number}
                  </span>
                ))
            ) : (
              <span className={classes['empty-state']}>No numbers selected</span>
            )}
          </div>
          <div className={classes['counter']}>{selectedNumbers.length}/5 numbers selected</div>
        </div>

        <div className={classes['amount-section']}>
          <h3 className={classes['section-title']}>Total Amount:</h3>
          <div className={classes['total-amount']}>${selectedAmount.toFixed(2)}</div>

          {maxAmount > 0 && (
            <div className={classes['max-amount-display']}>
              <span className={classes['max-amount-label']}>Maximum:</span>
              <span className={classes['max-amount-value']}>${maxAmount.toFixed(2)}</span>
              <div className={classes['progress-bar']}>
                <div
                  className={classes['progress-fill']}
                  style={{ width: `${(selectedAmount / maxAmount) * 100}%` }}
                ></div>
              </div>
              <div className={classes['remaining-amount']}>Remaining: ${(maxAmount - selectedAmount).toFixed(2)}</div>
            </div>
          )}
        </div>

        {selectedNumbers.length === 5 && selectedAmount > 0 && selectedAmount === maxAmount && (
          <div className={classes['ready-notification']}>
            <div className={classes['ready-title']}>Ticket Ready!</div>
            <div className={classes['ready-subtitle']}>Press &#34;Cash&#34; to complete the transaction</div>
          </div>
        )}
      </div>
    </div>
  );
}

import * as React from 'react';
import { Card, NumberGrid, MoneySelector, MoneyInputModal, ActionButtons, OutputInfo } from 'src/components';
import classes from './Home.module.scss';

export function Home(): React.ReactElement {
  const [isOpenMoneyInputModal, setIsOpenMoneyInputModal] = React.useState<boolean>(false);
  const [maxMoneyAmount, setMaxMoneyAmount] = React.useState<number>(0);

  return (
    <>
      <div className={classes['wrapper']}>
        <div className={classes['max-width']}>
          <header className={classes['header']}>
            <h1 className={classes['title']}>WHE WHE Cash Register</h1>
            <p className={classes['subtitle']}>Select 5 numbers and assign a money value</p>
          </header>

          <div className={classes['main-wrapper']}>
            <div className={classes['left-side-wrapper']}>
              <Card title={'Select Numbers (1-20)'}>
                <NumberGrid />
              </Card>

              <Card
                title={'Money Values'}
                subTitle={
                  maxMoneyAmount > 0
                    ? `(Max: $${maxMoneyAmount.toFixed(2)})`
                    : '(Asking the customer to know how much they play)'
                }
              >
                <MoneySelector maxAmount={maxMoneyAmount} />
              </Card>

              <ActionButtons
                setMaxAmount={setMaxMoneyAmount}
                setIsShowCashModal={() => []}
                setIsShowAskingModal={setIsOpenMoneyInputModal}
              />
            </div>

            <div className={classes['right-side-wrapper']}>
              <OutputInfo maxAmount={maxMoneyAmount} />
            </div>
          </div>
        </div>
      </div>

      <MoneyInputModal
        isOpen={isOpenMoneyInputModal}
        onClose={() => setIsOpenMoneyInputModal(false)}
        onSubmit={setMaxMoneyAmount}
      />
    </>
  );
}

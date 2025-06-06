import * as React from 'react';
import { Card, NumberGrid, MoneySelector } from 'src/components';
import classes from './Home.module.scss';

export function Home(): React.ReactElement {
  return (
    <div className={classes['wrapper']}>
      <div className={classes['maxWith']}>
        <header className={classes['header']}>
          <h1 className={classes['title']}>WHE WHE Cash Register</h1>
          <p className={classes['subtitle']}>Select 5 numbers and assign a money value</p>
        </header>

        <div className={classes['main-wrapper']}>
          <div className={classes['left-side-wrapper']}>
            <Card title={'Select Numbers (1-20)'}>
              <NumberGrid />
            </Card>

            <Card title={'Money Values'}>
              <MoneySelector maxAmount={100} />
            </Card>

            {/*<ActionButtons onClear={handleClear} onRandom={handleRandom} onCash={handleCash} />*/}
          </div>

          <div className={classes['right-side-wrapper']}>
            {/*<SelectedNumbers selectedNumbers={selectedNumbers} totalAmount={totalAmount} />*/}
          </div>
        </div>
      </div>
    </div>
  );
}

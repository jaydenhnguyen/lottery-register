import * as React from 'react';
import classes from './Home.module.scss';

export function Home(): React.ReactElement {
  return (
    <div className={classes['wrapper']}>
      <div className={classes['maxWith']}>
        <header className={classes['header']}>
          <h1 className={classes['title']}>WHE WHE Cash Register</h1>
          <p className={classes['subtitle']}>Select 5 numbers and assign a money value</p>
        </header>
      </div>
    </div>
  );
}

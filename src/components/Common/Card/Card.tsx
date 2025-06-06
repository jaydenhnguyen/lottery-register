import * as React from 'react';
import classes from './Card.module.scss';

type Props = {
  title: string;
  children: React.ReactElement;
};

export function Card({ title, children }: Props): React.ReactElement {
  return (
    <div className={classes['wrapper']}>
      <h2 className={classes['title']}>{title}</h2>
      {children}
    </div>
  );
}

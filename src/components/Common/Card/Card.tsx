import * as React from 'react';
import classes from './Card.module.scss';

type Props = {
  title: string;
  subTitle?: string;
  children: React.ReactElement;
};

export function Card({ title, subTitle, children }: Props): React.ReactElement {
  return (
    <div className={classes['wrapper']}>
      <h2 className={classes['title']}>
        {title}
        <span className={classes['subtitle']}>{subTitle}</span>
      </h2>
      {children}
    </div>
  );
}

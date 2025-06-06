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
      <div className={classes['title-wrapper']}>
        <h2 className={classes['title']}>{title}</h2>
        {subTitle && <span className={classes['subtitle']}>{subTitle}</span>}
      </div>
      {children}
    </div>
  );
}

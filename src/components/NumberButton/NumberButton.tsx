import * as React from 'react';
import classNames from 'classnames';
import {useSelectedNumber} from 'src/hooks';
import classes from './NumberButton.module.scss';

type Props = {
  numberValue: number;
  onClick: (numberValue: number) => void;
};

export function NumberButton({numberValue, onClick}: Props): React.ReactElement {
  const {
    state: {selectedNumbers},
  } = useSelectedNumber();

  const isSelected = React.useMemo(() => selectedNumbers.includes(numberValue), [numberValue, selectedNumbers]);

  return (
    <button
      className={classNames(classes['wrapper'], isSelected ? classes['selected'] : classes['unselected'])}
      onClick={() => onClick(numberValue)}
    >
      {numberValue}
    </button>
  );
}

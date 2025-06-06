import * as React from 'react';
import classNames from 'classnames';
import { useSelectedNumber } from 'src/hooks';
import classes from './NumberButton.module.scss';

type Props = {
  numberValue: number;
  onSelect: (numberValue: number) => void;
};

export function NumberButton({ numberValue, onSelect }: Props): React.ReactElement {
  const {
    state: { selectedNumbers },
  } = useSelectedNumber();

  const isSelected = React.useMemo(() => selectedNumbers.includes(numberValue), [numberValue, selectedNumbers]);

  return (
    <button
      className={classNames(classes['wrapper'], isSelected ? classes['selected'] : classes['unselected'])}
      onClick={() => onSelect(numberValue)}
    >
      {numberValue}
    </button>
  );
}

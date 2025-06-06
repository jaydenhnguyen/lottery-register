export enum SelectedMoneyActionType {
  ADD_MONEY = 'ADD_MONEY',
  CLEAR_MONEY = 'CLEAR_MONEY',
}

export type SelectedMoneyState = {
  total: number;
};

export type SelectedMoneyAction = {
  type: SelectedMoneyActionType;
  payload: {
    amount: number;
  };
};

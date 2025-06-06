export enum SelectedNumbersActionType {
  SET_NUMBERS = 'SET_NUMBERS',
  CLEAR_NUMBERS = 'CLEAR_NUMBERS',
}

export type SelectedNumbersState = {
  selectedNumbers: number[];
};

export type SelectedNumbersAction = {
  type: SelectedNumbersActionType;
  payload?: number[];
};

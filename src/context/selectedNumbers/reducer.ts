import { SelectedNumbersAction, SelectedNumbersActionType, SelectedNumbersState } from './types';

export const initialSelectedNumbers: SelectedNumbersState = {
  selectedNumbers: [],
};

export function selectedNumbersReducer(
  state: SelectedNumbersState,
  action: SelectedNumbersAction,
): SelectedNumbersState {
  switch (action.type) {
    case SelectedNumbersActionType.SET_NUMBERS:
      return { ...state, selectedNumbers: action.payload };
    case SelectedNumbersActionType.CLEAR_NUMBERS:
      return { ...state, selectedNumbers: [] };
    default:
      return state;
  }
}

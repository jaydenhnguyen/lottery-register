import { SelectedMoneyAction, SelectedMoneyActionType, SelectedMoneyState } from './type';

export const initialSelectedMoney: SelectedMoneyState = {
  total: 0,
};

export function selectedMoneyReducer(state = initialSelectedMoney, action: SelectedMoneyAction): SelectedMoneyState {
  switch (action.type) {
    case SelectedMoneyActionType.ADD_MONEY:
      return { ...state, total: state.total + action.payload.amount };
    case SelectedMoneyActionType.CLEAR_MONEY:
      return { ...state, total: 0 };
    default:
      return state;
  }
}

import { AppDispatch } from "../state/store.ts";

export const handleEventAction = <T>(
  dispatch: AppDispatch,
  actionCreator: (value: T) => void,
  value: T
) => {
  dispatch(actionCreator(value));
};

export const handleSubmit = (
  actions,
  handleEventAction,
  dispatch,
  actionCreator,
  values
) => {
  handleEventAction(dispatch, actionCreator, values);
  actions.resetForm();
};

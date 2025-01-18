import { AppDispatch } from "../state/store.ts";
import { EventItem } from "../types/eventTypes.ts";

export const handleEventAction = (
  dispatch: AppDispatch,
  actionCreator: (value?: EventItem | HTMLInputElement | string | undefined) => void,
  value?: EventItem | HTMLInputElement | string 
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

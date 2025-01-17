import { handleEventAction } from "./eventsUtils.ts";
import { AppDispatch } from "../state/store.ts";
import { EventItem } from "../types/eventTypes.ts";

export const handleEventAction = (
  dispatch: AppDispatch,
  actionCreator: (value?: EventItem) => void,
  value?: EventItem
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

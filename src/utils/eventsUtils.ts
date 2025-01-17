import { handleEventAction } from "./eventsUtils.ts";
import { AppDispatch } from "../state/store.ts";
import { EventItem } from "../types/eventTypes.ts";

export const handleEventAction = (
  value: EventItem,
  dispatch: AppDispatch,
  actionCreator: (value: EventItem) => void
) => {
  dispatch(actionCreator(value));
};

export const handleSubmit = (
  values,
  actions,
  handleEventAction,
  dispatch,
  actionCreator
) => {
  handleEventAction(values, dispatch, actionCreator);
  actions.resetForm();
};



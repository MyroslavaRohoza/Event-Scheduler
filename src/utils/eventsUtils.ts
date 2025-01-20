import { AppDispatch } from "../state/store.ts";
import { Action } from "redux";
import { FormikHelpers } from "formik";
import { EventItem } from "../types/eventTypes.ts";

export const handleEventAction = <T>(
  dispatch: AppDispatch,
  actionCreator: (value: T) => Action,
  value?: T
) => {
  if (value !== undefined) {
    dispatch(actionCreator(value));
  } else {
    dispatch(actionCreator(value as T));
  }
};

export const handleSubmit = <T>(
  actions: FormikHelpers<EventItem>,
  handleEventAction: (
    dispatch: AppDispatch,
    actionCreator: (value: T) => Action,
    value?: T
  ) => void,
  dispatch: AppDispatch,
  actionCreator: (value: T) => Action,
  values: T
) => {
  handleEventAction(dispatch, actionCreator, values);
  actions.resetForm();
};

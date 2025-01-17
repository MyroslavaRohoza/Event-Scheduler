import { handleEventAction } from './eventsUtils.ts';
import { AppDispatch } from "../state/store.ts";
import { EventItem } from "../types/eventTypes.ts";


export const handleEventAction = (
  eventItem: EventItem,
  dispatch: AppDispatch,
  actionCreator: (eventItem: EventItem) => void
) => {
  const finalEventItem = { ...eventItem };
  dispatch(actionCreator(finalEventItem));
};


 export const handleSubmit = (values, actions, handleEventAction, dispatch, actionCreator) => {
    handleEventAction(values,dispatch, actionCreator);
    actions.resetForm();
  };

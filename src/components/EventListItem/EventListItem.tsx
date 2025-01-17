import { useDispatch } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import Button from "../Button/Button.tsx";
import { deleteEvent, editEvent } from "../../state/events/eventSlice.ts";

const EventListItem = ({
  item: { title, category, time, date, description, id },
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h3>{title}</h3>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Date:</strong> <time dateTime={date}>{date}</time>
      </p>
      <p>
        <strong>Time:</strong> <time>{time}</time>
      </p>
      <p>{description}</p>
      <Button handleBtnClick={() => handleEventAction(id, dispatch, editEvent)}>
        Edit
      </Button>
      <Button
        handleBtnClick={() => handleEventAction(id, dispatch, deleteEvent)}
      >
        Delete
      </Button>
    </li>
  );
};

export default EventListItem;

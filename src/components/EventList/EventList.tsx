import { useSelector } from "react-redux";
import { selectEvents } from "../../state/events/eventSelectors";
import EventListItem from "../EventListItem/EventListItem.tsx";

const EventList = () => {
  const filteredEvents = useSelector(selectEvents);
  console.log(filteredEvents);
  return (
    <ul>
      {Array.isArray(filteredEvents) && filteredEvents.length === 0 && (
        <li>
          <p>Please, add your events</p>
        </li>
      )}
      {Array.isArray(filteredEvents) &&
        filteredEvents.map((eventItem) => {
          return <EventListItem key={eventItem.id} item={eventItem} />;
        })}
    </ul>
  );
};

export default EventList;

import { useSelector } from "react-redux";
import { selectEvents } from "../../state/events/eventSelectors";
import EventListItem from "../EventListItem/eventListItem";

const EventList = () => {
  const filteredEvents = useSelector(selectEvents);
  console.log(filteredEvents);
  return (
    <ul>
      {Array.isArray(filteredEvents) && filteredEvents.length === 0 && (
        <li>
          <p>Please, add your contacts</p>
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

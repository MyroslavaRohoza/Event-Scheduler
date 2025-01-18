import { useSelector } from "react-redux";
import EventListItem from "../EventListItem/EventListItem.tsx";
import { selectFilteredEventsByDate } from "../../state/events/eventSelectors.ts";

const EventList = () => {
  const filteredEvents = useSelector(selectFilteredEventsByDate);
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

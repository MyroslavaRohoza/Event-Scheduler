import EventListItem from "../EventListItem/EventListItem.tsx";
import PaginatedEvents from "../PaginatedEvents/PaginatedEvents.tsx";

const EventList = ({filteredEvents}) => {
  return (
    <>
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
      <PaginatedEvents items={filteredEvents} itemsPerPage={3} />
    </>
  );
};

export default EventList;

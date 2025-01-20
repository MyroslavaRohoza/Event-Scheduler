import React from "react";
import { EventItem } from "../../types/eventTypes.ts";
import EventListItem from "../EventListItem/EventListItem.tsx";
import css from "./eventList.module.css";

type EventListProps = {
  filteredEvents: EventItem[];
};

const EventList: React.FC<EventListProps> = ({ filteredEvents }) => {
  return (
    <ul className={css.eventList}>
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

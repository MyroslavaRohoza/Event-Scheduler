import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../utils/eventConstants.ts";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { selectFilteredEventsByDate } from "../../state/events/eventSelectors.ts";
import {
  setCategoryFilter,
  setDateFilter,
} from "../../state/events/eventSlice.ts";
import { useState } from "react";

const EventFilter = () => {
  const dispatch = useDispatch();
  const events = useSelector(selectFilteredEventsByDate);

  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));

    if (name === "startDate" || name === "endDate") {
      const updatedRange = {
        ...dateRange,
        [name]: value,
      };
      handleEventAction(dispatch, setDateFilter, updatedRange);
    }
  };

  return (
    <div>
      <select
        onChange={(evt) =>
          handleEventAction(dispatch, setCategoryFilter, evt.target.value)
        }
        defaultValue=""
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      {/* Фильтр по времени */}
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
          />
        </label>
      </div>

      <ul>
        {Array.isArray(events) &&
          events.map((event) => (
            <li key={event.id}>
              {event.title} - {event.category} - {event.eventDate}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default EventFilter;

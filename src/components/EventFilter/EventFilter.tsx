import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../utils/eventConstants.ts";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import {
  setCategoryFilter,
  setDateFilter,
} from "../../state/events/eventSlice.ts";
import { useState } from "react";
import { selectDateRange } from "../../state/events/eventSelectors.ts";

const EventFilter = () => {
  const dispatch = useDispatch();
  const dateRange = useSelector(selectDateRange);

  const [localDateRange, setLocalDateRange] = useState({
    startDate: dateRange.startDate || "", 
    endDate: dateRange.endDate || "", 
  });

  const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setLocalDateRange((prev) => ({
      ...prev,
      [name]: value,
    }));

    const updatedRange = {
      ...localDateRange,
      [name]: value,
    };
    handleEventAction(dispatch, setDateFilter, updatedRange);
  };

  return (
    <div>
      <select
        onChange={(evt) =>
          handleEventAction(dispatch, setCategoryFilter, evt.target.value)
        }
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={localDateRange.startDate || ""} 
            onChange={handleDateChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={localDateRange.endDate || ""}
            onChange={handleDateChange}
          />
        </label>
      </div>
    </div>
  );
};

export default EventFilter;

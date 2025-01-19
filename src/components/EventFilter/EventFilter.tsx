import { useDispatch, useSelector } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { selectDateRange } from "../../state/filter/filterSelectors.ts";
import { setDateFilter } from "../../state/filter/filterSlice.ts";

const EventFilter = () => {
  const dispatch = useDispatch();
  const dateRange = useSelector(selectDateRange);

  const handleDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    handleEventAction(dispatch, setDateFilter, {
      ...dateRange,
      [name]: value,
    });
  };

  return (
    <div>
      <label>
        Start Date:
        <input
          type="date"
          name="startDate"
          value={dateRange.startDate || ""}
          onChange={handleDateChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="endDate"
          value={dateRange.endDate || ""}
          onChange={handleDateChange}
        />
      </label>
    </div>
  );
};

export default EventFilter;

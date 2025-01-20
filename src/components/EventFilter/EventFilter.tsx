import { useDispatch, useSelector } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { selectDateRange } from "../../state/filter/filterSelectors.ts";
import { setDateFilter } from "../../state/filter/filterSlice.ts";
import { TextField, Stack } from "@mui/material";

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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginTop: "30px" }}
      >
        <TextField
          type="date"
          name="startDate"
          label="Start Date"
          value={dateRange.startDate || ""}
          onChange={handleDateChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            marginBottom: 2,
            width: "200px",
          }}
        />
        <TextField
          type="date"
          name="endDate"
          label="End Date"
          value={dateRange.endDate || ""}
          onChange={handleDateChange}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: "8px",
            },
            marginBottom: 2,
            width: "200px",
          }}
        />
      </Stack>
    </div>
  );
};

export default EventFilter;

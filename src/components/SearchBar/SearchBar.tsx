import { useDispatch, useSelector } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { selectTitleEvent } from "../../state/filter/filterSelectors.ts";
import { filterChange } from "../../state/filter/filterSlice.ts";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const title = useSelector(selectTitleEvent);
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        value={title}
        onChange={(evt) =>
          handleEventAction(dispatch, filterChange, evt.target.value)
        }
        label="Search"
        variant="outlined"
        sx={{ width: "40%" }}
      />
    </div>
  );
};

export default SearchBar;

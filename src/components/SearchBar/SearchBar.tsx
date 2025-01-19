import { useDispatch, useSelector } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { selectTitleEvent } from "../../state/filter/filterSelectors.ts";
import { filterChange } from "../../state/filter/filterSlice.ts";

const SearchBar = () => {
  const title = useSelector(selectTitleEvent);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(evt) =>
          handleEventAction(dispatch, filterChange, evt.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;

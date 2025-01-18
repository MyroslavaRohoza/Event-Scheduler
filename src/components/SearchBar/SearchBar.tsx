import { useDispatch, useSelector } from "react-redux";
import { selectTitleEvent } from "../../state/events/eventSelectors.ts";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { filterChange } from "../../state/events/eventSlice.ts";

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

import { useSelector } from "react-redux";
import { selectTitleEvent } from "../../state/events/eventSelectors.ts";

const SearchBar = () => {
  const title = useSelector(selectTitleEvent);
  return (
    <div>
      <input type="text" value={title}   onChange={setFilter} />
    </div>
  );
};

export default SearchBar;

import { handleEventAction } from "../../utils/eventsUtils.ts";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../state/filter/filterSlice.ts";
import { categories } from "../../utils/eventConstants.ts";

export const CategoryFilter = () => {
  const dispatch = useDispatch();
  return (
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
  );
};

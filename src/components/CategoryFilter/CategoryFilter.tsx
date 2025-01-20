import { useDispatch } from "react-redux";
import { handleEventAction } from "../../utils/eventsUtils.ts";
import { setCategoryFilter } from "../../state/filter/filterSlice.ts";
import { categories } from "../../utils/eventConstants.ts";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const CategoryFilter = () => {
  const dispatch = useDispatch();

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ width: "200px", marginBottom: 2, marginTop: "50px" }}
    >
      <InputLabel id="category-select-label">Category</InputLabel>
      <Select
        labelId="category-select-label"
        defaultValue="all"
        onChange={(evt) =>
          handleEventAction(dispatch, setCategoryFilter, evt.target.value ?? "")
        }
        label="Category"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
          },
        }}
      >
        <MenuItem value="all">All Categories</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.value} value={category.value}>
            {category.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

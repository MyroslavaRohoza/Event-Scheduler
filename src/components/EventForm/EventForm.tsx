import css from "./eventForm.module.css";
import React, { useId } from "react";
import { Field, Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button.tsx";
import { handleSubmit, handleEventAction } from "../../utils/eventsUtils.ts";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../../state/events/eventSlice.ts";
import { EventItem } from "../../types/eventTypes.ts";
import { categories } from "../../utils/eventConstants.ts";
import { selectError } from "../../state/events/eventSelectors.ts";
import { setTotalItems } from "../../state/pages/pagesSlice.ts";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const EventForm: React.FC = () => {
  const dispatch = useDispatch();
  const titleId = useId();
  const dateId = useId();
  const timeId = useId();
  const categoryId = useId();
  const descriptionId = useId();

  const errorMessage = useSelector(selectError);

  const initialValues: EventItem = {
    title: "",
    date: "",
    time: "",
    category: "",
    description: "",
  };

  return (
    <div className={css.eventForm}>
      <Formik
        initialValues={initialValues}
        className={css.eventForm}
        onSubmit={(values, actions) => {
          const eventWithId = { ...values, id: uuidv4() };
          handleSubmit(
            actions,
            handleEventAction,
            dispatch,
            addEvent,
            eventWithId
          );
          handleEventAction(dispatch, setTotalItems, 1);
        }}
      >
        <Form>
          <Field
            type="text"
            id={titleId}
            name="title"
            required
            as={TextField}
            variant="outlined"
            label="Title"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Field
            type="date"
            id={dateId}
            name="date"
            required
            as={TextField}
            variant="outlined"
            label="Date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ marginBottom: 2 }}
          />
          <Field
            type="time"
            id={timeId}
            name="time"
            required
            as={TextField}
            variant="outlined"
            label="Time"
            fullWidth
            sx={{ marginBottom: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel id={categoryId}>Category</InputLabel>
            <Field
              as={Select}
              id={categoryId}
              name="category"
              required
              labelId={categoryId}
              label="Category"
            >
              <MenuItem>Select category</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <Field
            as={TextField}
            id={descriptionId}
            name="description"
            multiline
            rows={3}
            placeholder="Description"
            sx={{
              resize: "none",
              width: "100%",
              marginBottom: 3,
            }}
          />
          <Button>Save</Button>
        </Form>
      </Formik>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default EventForm;

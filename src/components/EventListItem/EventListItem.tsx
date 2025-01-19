import css from "./eventListItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleEventAction, handleSubmit } from "../../utils/eventsUtils.ts";
import Button from "../Button/Button.tsx";
import {
  deleteEvent,
  turnOnEditEvent,
  editEvent,
  turnOffEditEvent,
} from "../../state/events/eventSlice.ts";
import { selectEditEventId } from "../../state/events/eventSelectors.ts";
import { Field, Formik, Form } from "formik";
import { EventItem } from "../../types/eventTypes.ts";
import { categories } from "../../utils/eventConstants.ts";
import { TextField } from "@mui/material";

const EventListItem = ({
  item: { title, category, time, date, description, id },
}: {
  item: EventItem;
}) => {
  const dispatch = useDispatch();

  const editingEventId = useSelector(selectEditEventId);
  const isEditEvent = editingEventId === id;

  const initialValues = {
    title: title || "",
    category: category || "",
    time: time || "",
    date: date || "",
    description: description || "",
  };

  return isEditEvent ? (
    <li>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const updatedEvent = { id, updatedEvent: values };
          handleSubmit(
            actions,
            handleEventAction,
            dispatch,
            editEvent,
            updatedEvent
          );
          handleEventAction(dispatch, turnOffEditEvent);
        }}
      >
        <Form className={css.containerWrapper}>
          <Field
            type="text"
            id="title"
            name="title"
            required
            as={TextField}
            variant="outlined"
            fullWidth
            InputProps={{
              inputProps: {
                style: {
                  padding: "5px",
                },
              },
            }}
          />

          <label htmlFor="category">
            <strong>Category:</strong>
            <Field
              as="select"
              id="category"
              name="category"
              required
              style={{
                padding: "5px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "4px",
                outline: "none",
              }}
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </Field>
          </label>
          <label htmlFor="date">
            <strong>Date:</strong>
            <Field
              type="date"
              id="date"
              name="date"
              required
              as={TextField}
              variant="outlined"
              fullWidth
              InputProps={{
                inputProps: {
                  style: {
                    padding: "5px",
                  },
                },
              }}
            />
          </label>
          <label htmlFor="time">
            <strong>Time:</strong>
            <Field
              type="time"
              id="time"
              name="time"
              required
              as={TextField}
              variant="outlined"
              fullWidth
              InputProps={{
                inputProps: {
                  style: {
                    padding: "5px",
                  },
                },
              }}
            />
          </label>
          <label htmlFor="description">
            <strong>Description:</strong>
            <Field
              id="description"
              name="description"
              style={{ resize: "none" }}
              as={TextField}
              variant="outlined"
              fullWidth
              InputProps={{
                inputProps: {
                  style: {
                    padding: "5px",
                  },
                },
              }}
            />
          </label>
          <Button buttonType="submit">Save</Button>
        </Form>
      </Formik>
    </li>
  ) : (
    <li className={css.containerWrapper}>
      <span className={css.eventTitle}>
        <strong>{title}</strong>
      </span>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Date:</strong> <time dateTime={date}>{date}</time>
      </p>
      <p>
        <strong>Time:</strong> <time>{time}</time>
      </p>
      <p>{description}</p>
      <div className={css.buttonContainer}>
        <Button
          handleBtnClick={() =>
            handleEventAction(dispatch, turnOnEditEvent, id)
          }
        >
          Edit
        </Button>
        <Button
          backgroundColor="red"
          handleBtnClick={() => handleEventAction(dispatch, deleteEvent, id)}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};

export default EventListItem;

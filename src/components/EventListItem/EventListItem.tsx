import { useDispatch, useSelector } from "react-redux";
import { handleEventAction, handleSubmit } from "../../utils/eventsUtils.ts";
import Button from "../Button/Button.tsx";
import {
  deleteEvent,
  turnOnEditEvent,
  editEvent,
  turnOffEditEvent,
} from "../../state/events/eventSlice.ts";
import { selectIsEditEvent } from "../../state/events/eventSelectors.ts";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { EventItem } from "../../types/eventTypes.ts";

const EventListItem = ({
  item: { title, category, time, date, description, id },
}: {
  item: EventItem;
}) => {
  const dispatch = useDispatch();
  const isEditEvent = useSelector(selectIsEditEvent);

  const categories = [
    { value: "workshop", label: "Workshop" },
    { value: "seminar", label: "Seminar" },
    { value: "conference", label: "Conference" },
    { value: "other", label: "Other" },
  ];

  const initialValues = {
    title: title || "",
    category: category || "",
    time: time || "",
    date: date || "",
    description: description || "",
  };

  return isEditEvent ? (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log(values, id);
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
      <Form>
        <li>
          <div>
            <Field type="text" id="title" name="title" required />
            <ErrorMessage name="title" component="div" />
          </div>
          <div>
            <label htmlFor="category">
              <strong>Category:</strong>
            </label>
            <Field as="select" id="category" name="category" required>
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="category" component="div" />
          </div>
          <div>
            <label htmlFor="date">
              <strong>Date:</strong>
            </label>
            <Field type="date" id="date" name="date" required />
            <ErrorMessage name="date" component="div" />
          </div>
          <div>
            <label htmlFor="time">
              <strong>Time:</strong>
            </label>
            <Field type="time" id="time" name="time" required />
            <ErrorMessage name="time" component="div" />
          </div>
          <div>
            <Field as="textarea" id="description" name="description" />
            <ErrorMessage name="description" component="div" />
          </div>
          <Button buttonType="submit">Save</Button>
        </li>
      </Form>
    </Formik>
  ) : (
    <li>
      <h3>{title}</h3>
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
      <Button
        handleBtnClick={() => handleEventAction(dispatch, turnOnEditEvent, id)}
      >
        Edit
      </Button>
      <Button
        handleBtnClick={() => handleEventAction(dispatch, deleteEvent, id)}
      >
        Delete
      </Button>
    </li>
  );
};

export default EventListItem;

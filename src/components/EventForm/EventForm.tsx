import React, { useId } from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button.tsx";
import { handleSubmit, handleEventAction } from "../../utils/eventsUtils";
import { useDispatch } from "react-redux";
import { addEvent } from "../../state/events/eventSlice";
import { EventItem } from "../../types/eventTypes.ts";

const EventForm: React.FC = () => {
  const dispatch = useDispatch();
  const titleId = useId();
  const dateId = useId();
  const timeId = useId();
  const categoryId = useId();
  const descriptionId = useId();

  const categories = [
    { value: "workshop", label: "Workshop" },
    { value: "seminar", label: "Seminar" },
    { value: "conference", label: "Conference" },
    { value: "other", label: "Other" },
  ];

  const initialValues: EventItem = {
    title: "",
    date: "",
    time: "",
    category: "",
    description: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const eventWithId = { ...values, id: uuidv4() };
        handleSubmit(
          eventWithId,
          actions,
          handleEventAction,
          dispatch,
          addEvent
        );
      }}
    >
      <Form>
        <div>
          <label htmlFor={titleId}>Title:</label>
          <Field type="text" id={titleId} name="title" required />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor={dateId}>Date:</label>
          <Field type="date" id={dateId} name="date" required />
          <ErrorMessage name="date" component="div" />
        </div>
        <div>
          <label htmlFor={timeId}>Time:</label>
          <Field type="time" id={timeId} name="time" required />
          <ErrorMessage name="time" component="div" />
        </div>
        <div>
          <label htmlFor={categoryId}>Category:</label>
          <Field as="select" id={categoryId} name="category" required>
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </Field>
          <ErrorMessage name="category" component="div" />
        </div>
        <div>
          <label htmlFor={descriptionId}>Description:</label>
          <Field as="textarea" id={descriptionId} name="description" />
          <ErrorMessage name="description" component="div" />
        </div>
        <Button buttonType="submit">Save</Button>
      </Form>
    </Formik>
  );
};

export default EventForm;

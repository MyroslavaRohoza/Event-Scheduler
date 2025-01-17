import React from "react";
import { Field, Form, ErrorMessage, Formik } from "formik";
import Button from "../Button/Button.tsx";
import { EventItem } from "../../types/eventTypes.ts";
import { handleEventAction, handleSubmit } from "../../utils/eventsUtils.ts";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addEvent } from "../../state/events/eventSlice.ts";

const categories = [
  { value: "workshop", label: "Workshop" },
  { value: "seminar", label: "Seminar" },
  { value: "conference", label: "Conference" },
  { value: "other", label: "Other" },
];

const EventForm: React.FC = () => {
  const initialValues: EventItem = {
    title: "",
    date: "",
    time: "",
    category: "",
    description: "",
  };

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions, handleEventAction, dispatch, addEvent);
      }}
    >
      <Form>
        <div>
          <label htmlFor="title">Title:</label>
          <Field type="text" id="title" name="title" required />
          <ErrorMessage name="title" component="div" />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <Field type="date" id="date" name="date" required />
          <ErrorMessage name="date" component="div" />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <Field type="time" id="time" name="time" required />
          <ErrorMessage name="time" component="div" />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <Field as="select" id="category" name="category" required>
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
          <label htmlFor="description">Description:</label>
          <Field as="textarea" id="description" name="description" />
          <ErrorMessage name="description" component="div" />
        </div>
        <Button>Save</Button>
      </Form>
    </Formik>
  );
};

export default EventForm;

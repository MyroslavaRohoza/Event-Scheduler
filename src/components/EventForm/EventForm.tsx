import React from "react";
import {  Field, Form, ErrorMessage, Formik } from "formik";


type EventValues = {
  title: string;
  date: string;
  time: string;
  category: string;
  description: string;
};

const categories = [
  { value: "workshop", label: "Workshop" },
  { value: "seminar", label: "Seminar" },
  { value: "conference", label: "Conference" },
  { value: "other", label: "Other" },
];

const EventForm: React.FC = () => {

  const initialValues: EventValues = {
    title: "",
    date: "",
    time: "",
    category: "",
    description: "",
  };

  const handleSubmit = (data: EventValues) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues} 
      onSubmit={handleSubmit} 
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
        <button type="submit">Save Event</button>
      </Form>
    </Formik>
  );
};

export default EventForm;

import { Field, Form, Formik } from "formik";
import React from "react";
import Modal from "./Modal";

const AddAndUpdateContact = ({ isOpen, onClose }) => {
  //function to send data to firebase
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="h-10 border" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="h-10 border" />
          </div>
          <button className="border bg-orange px-3 py-1.5 self-end">
            Add contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
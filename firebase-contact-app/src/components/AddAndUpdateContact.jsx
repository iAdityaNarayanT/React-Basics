import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { db } from "../config/firebase";
import Modal from "./Modal";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Inavlid Email ").required("Email is Required"),
});

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  //function to send data to firebase
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added succefully!");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated succefully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate
            ? { name: contact.name, email: contact.email }
            : {
                name: "",
                email: "",
              }
        }
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
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
            {isUpdate ? "Update" : "Add"} contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;

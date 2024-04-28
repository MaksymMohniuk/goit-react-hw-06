import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const contactFormScheme = Yup.object().shape({
  contactName: Yup.string()
    .required("Name is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
  contactNumber: Yup.string()
    .required("Number is required!")
    .min(3, "Too short")
    .max(50, "Too long"),
});

const FORM_INITIAL_VALUES = {
  contactName: "",
  contactNumber: "",
};

const ContactForm = () => {
  const selectContacts = useSelector((state) => {
    return state.contacts.items;
  });
  const dispatch = useDispatch();
  const onAddContact = (formData) => {
    const { contactName, contactNumber } = formData;
    const finalContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    dispatch(addContact(finalContact));
  };
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={contactFormScheme}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.formGroup}>
            <label htmlFor="contactName">Name</label>
            <Field type="text" id="contactName" name="contactName" />
            <ErrorMessage
              component="p"
              name="contactName"
              className={styles.error}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contactNumber">Number</label>
            <Field type="text" id="contactNumber" name="contactNumber" />
            <ErrorMessage
              component="p"
              name="contactNumber"
              className={styles.error}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={styles.contactListContainer}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={styles.contactListItem}>
              <Contact contact={contact} deleteContact={deleteContact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

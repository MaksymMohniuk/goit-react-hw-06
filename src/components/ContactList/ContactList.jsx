import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  console.log(contacts);
  const selectNameFilter = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <div className={styles.contactListContainer}>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactListItem}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

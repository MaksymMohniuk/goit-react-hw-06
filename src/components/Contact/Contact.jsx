import styles from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className={styles.contactContainer}>
      <p className={styles.contactName}>{contact.name}</p>
      <p className={styles.contactNumber}>{contact.number}</p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;

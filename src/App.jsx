import { useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch;

  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filter = useSelector((state) => {
    return state.filters.name;
  });

  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (formData) => {
    const { contactName, contactNumber } = formData;
    const finalContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    const action = { type: "contacts/ADD_CONTACT", payload: finalContact };
    dispatch(action);
  };

  const deleteContact = (contactId) => {
    const action = { type: "contacts/DELETE_CONTACT", payload: contactId };
    dispatch(action);
  };

  const onChangeFilter = (e) => {
    const action = { type: "filters/CHANGE_FILTER", payload: e.target.value };
    dispatch(action);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;

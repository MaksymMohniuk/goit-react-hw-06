// import { useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice.js";
import { changeFilter } from "./redux/filtersSlice.js";

function App() {
  const dispatch = useDispatch();

  const selectContacts = useSelector((state) => {
    return state.contacts.items;
  });

  const selectNameFilter = useSelector((state) => {
    return state.filters.name;
  });

  const onAddContact = (formData) => {
    const { contactName, contactNumber } = formData;
    const finalContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    const action = addContact(finalContact);
    dispatch(action);
  };

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const onChangeFilter = (e) => {
    const action = changeFilter(e.target.value);
    dispatch(action);
  };

  const filteredContacts = selectContacts.filter(
    (contact) =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox filter={selectNameFilter} onChangeFilter={onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </div>
    </>
  );
}

export default App;

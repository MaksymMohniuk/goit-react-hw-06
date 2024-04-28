// import { useEffect } from "react";
// import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { useSelector } from "react-redux";
// import { changeFilter } from "./redux/filtersSlice.js";

function App() {
  const selectNameFilter = useSelector((state) => {
    return state.filters.name;
  });

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
        <ContactForm />
        <SearchBox />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
}

export default App;

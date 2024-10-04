import css from "./Contacts.module.css";
import { getContacts, getFilter } from "../../redux/contacts/selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { setFilter } from "../../redux/filters/filterSlice";

const Contacts = () => {
  const [filterState, setFilterState] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setFilterState(value);
    dispatch(setFilter(value));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = (contacts, filter) => {
    const filterValue = filter ? filter.toLowerCase() : "";
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <div className={css.container}>
      <h2>Contacts</h2>
      <div>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filterState}
          onChange={handleChange}
        />
      </div>
      <ul className={css.contactsList}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;

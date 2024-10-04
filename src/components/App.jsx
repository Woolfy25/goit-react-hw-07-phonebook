import "./App.css";
import Title from "./Title/Title";
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";
import { fetchContacts } from "../redux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Title title="Phonebook" />
      <Form />
      <Contacts />
    </div>
  );
};

export default App;

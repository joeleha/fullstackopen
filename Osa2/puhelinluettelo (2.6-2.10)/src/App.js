import React, { useState } from "react";
import Contacts from "./Contacts";

const Filter = ({text, value, onChange}) => {
  return (
    <p>{text}<input value={value} onChange={onChange} /></p>
  )
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [st, setNewFilter] = useState('');

  const setName = (event) => {
    setNewName(event.target.value);
  };

  const setNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const setFilter = (event) => {
    setNewFilter(event.target.value);
  };

  const contacts = persons.filter(person => person.name.toLowerCase().includes(st.toLowerCase()))

  const addContact = (event) => {
    event.preventDefault();
    if(!persons.includes({name: newName})) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
  
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
    else {
      window.alert(`${newName} is already added to phonebook`)
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter shown with " value={st} onChange={setFilter}/>
      <h3>Add a new</h3>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={setName} /></div>
        <div>number: <input value={newNumber} onChange={setNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Contacts contacts={contacts} />
    </div>
  );
};

export default App;

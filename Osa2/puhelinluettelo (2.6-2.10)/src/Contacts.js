import React from "react";

const Person = (props) => {
    return (
      <p>{props.name} {props.number}</p>
    )
}

const Contacts= ({contacts}) => {
    return (
        <>
        <h3>Numbers</h3>
        <div>
            {contacts.map((person) =>
            <Person key={person.name} name={person.name} number={person.number}/>
            )}
        </div>
        </>
    )
}

export default Contacts;
import React, { useState } from "react";
import "./App.css";
import {useLocalStorage} from "./useLocalStorage";


function App() {
  const [firstName, setFirstName] = useLocalStorage("FIRST_NAME","");
  const [lastName, setLastName] = useLocalStorage("LAST_NAME",()=>{
    return "nothing"
  });
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES",[
    "Coding",
    "Learning",
  ]);

  return (
    <>
      <div >
        <label id="firstName" htmlFor="">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div id="lastName">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>{hobbies.join(",")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "something new..."])
        }>
        Add Hobby
      </button>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import {useLocalStorage} from "./useLocalStorage";


function App() {
  const [firstName, setFirstName] = uselocalStorage("FIRST_NAME","");
  const [lastName, setlastName] = useLocalStorage("LAST_NAME",()=>{
    return "nothing"
  });
  const [hobbies, setHobbies] = useLocalStorage("HOBBIES",[
    "Coding",
    "growing and glowing",
  ]);

  return (
    <>
      <div className="firstName">
        <label htmlFor="">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="lastName">
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </div>
      <div>{hobbies.join(",")}</div>
      <button
        onClick={() =>
          setHobbies((currentHobbies) => [...currentHobbies, "something new..."])
        }
      >
        Add Hobby
      </button>
    </>
  );
}

export default App;

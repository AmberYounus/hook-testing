import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [hobbies, setHobbies] = useState();

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
      <button onClick={()=>setHobbies(currentHobbies=>[...currentHobbies,"New Hobby"])}>Add Hobby</button>
    </>
  );
}

export default App;

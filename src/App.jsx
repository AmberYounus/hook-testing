import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();

  return (
    <>
      <div className="App">
        <label htmlFor="">First Name</label>
        <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Last Name</label>
        <input type="text" value={lastName} onChange={e=>setlastName(e.target.value)} />
      </div>
      <button>Add</button>
    </>
  );
}

export default App;

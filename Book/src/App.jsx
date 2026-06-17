import React, { useState } from "react";
import Input from "./components/Input";
import Display from "./components/Display";

export default function App() {
  const [notes, setNotes] = useState([]);
  const addNote = (title) => {
    setNotes([...notes, title]);
  };

  return (
    <>
      <Input notes={notes} addNote={addNote}/>
      <Display notes={notes} />
    </>
  );
}

import React, { useState } from "react";

export default function Input({ addNote, notes }) {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        placeholder="Enter Note"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          addNote(title);
        }}
      >
        Add Note
      </button>
    </div>
  );
}

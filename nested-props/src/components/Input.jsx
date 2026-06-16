import React, { useState } from "react";
import Display from "./display";
export default function Input({ appName }) {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Enter Your Name"
      />

      <Display app={appName} name={name} setName={setName} />
    </div>
  );
}

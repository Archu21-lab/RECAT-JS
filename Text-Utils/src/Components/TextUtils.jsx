import React, { useState } from "react";

export default function TextUtils() {
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h2 className="m-2 text-center">Text Utils</h2>
        <div className="form-floating">
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            className="form-control m-3 text-black"
            placeholder="Enter Something Amazing..."
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label className="m-2" htmlFor="floatingTextarea2">
            Content
          </label>
        </div>
        <hr />
        <p>{text}</p>
        <ul>
          <li>Total Length:{text.length}</li>
          <li>Total Words:{text.split(" ").length}</li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

import React from "react";

export default function TextUtils() {
  return (
    <>
      <div className="container">
        <div className="form-floating">
          <textarea
            className="form-control m-3"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
      </div>
    </>
  );
}

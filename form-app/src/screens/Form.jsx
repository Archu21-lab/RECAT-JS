import React from "react";

export default function Form() {
  return (
    <>
      <h2 className="fw-bold m-2 bg-info shadow p-2 rounded">
        Student Registration Form
      </h2>
      <hr />
      <div>
        <span className="fw-bold m-2">Name:</span>
        <input type="text" placeholder="Enter Your Name" />
      </div>
      <div className="m-2">
        <span className="fw-bold m-2">Email:</span>
        <input type="email" placeholder="Enter Your Email" />
      </div>
      <div className="m-2">
        <span className="fw-bold m-2">Phone</span>
        <input type="phone" placeholder="Enter Your Phone" />
      </div>
      <div className="m-2">
        <span className="fw-bold m-1">Gender:</span>
        <input className="m-1" type="radio" name="gender" />
        <span>Male</span>
        <input className="m-1" type="radio" name="gender" />
        <span>Female</span>
      </div>
      <div>
        <span className="fw-bold m-1">Skills :</span>
        <input className="m-2" type="checkbox"/> C
        <input className="m-2" type="checkbox"/>HTML
        <input className="m-2" type="checkbox"/>CSS
        <input className="m-2" type="checkbox"/>JS
        <input className="m-2" type="checkbox"/>ReactJS
      </div>
      <div>
        <span className="fw-bold m-1">City:</span>
        <select>
          <option value={"surat"}>Surat</option>
           <option value={"vadodara"}>Vadodara</option>
            <option value={"ahemdabad"}>Ahemdabad</option>
             <option value={"delhi"}>Delhi</option>
        </select>
      </div>
    </>
  );
}

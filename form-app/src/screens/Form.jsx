import React, { useState } from "react";
// const std={
//   name:"aman gupta",
//   email:"aman@gmail.com",
//   phone:8010192337,
//   gender:"male",
//   skills:["HTML","CSS"],
//   city:"kolkata",
//   address:"city light,kolkata,India"
// }

export default function Form() {
  const [Student, setStudent] = useState({skills:[]});

  const getName = (e) => {
    setStudent({ ...Student, name: e.target.value });
  };
  const getEmail = (e) => {
    setStudent({ ...Student, email: e.target.value });
  };
  const getPhone = (e) => {
    setStudent({ ...Student, phone: e.target.value });
  };
  const getGender = (e) => {
    console.log(e.target.value);
    setStudent({ ...Student, gender: e.target.value });
  };
  const getSkills = (e) => {
    setStudent({ ...Student, skills: [...Student.skills, e.target.value] });
  };
  const getCity = (e) => {
    setStudent({ ...Student, city: e.target.value });
  };
  const getAddress = (e) => {
    setStudent({ ...Student, address: e.target.value });
  };

  const handleSubmit = () => {
    console.log(Student);
  };

  return (
    <>
      <h2 className="fw-bold m-2 bg-info shadow p-2 rounded">
        Student Registration Form
      </h2>
      <hr />
      <div>
        <span className="fw-bold m-2">Name:</span>
        <input onChange={getName} type="text" placeholder="Enter Your Name" />
      </div>
      <div className="m-2">
        <span className="fw-bold m-2">Email:</span>
        <input
          onChange={getEmail}
          type="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div className="m-2">
        <span className="fw-bold m-2">Phone</span>
        <input
          onChange={getPhone}
          type="phone"
          placeholder="Enter Your Phone"
        />
      </div>
      <div className="m-2">
        <span className="fw-bold m-1">Gender:</span>
        <input
          value={"Male"}
          onChange={getGender}
          className="m-1"
          type="radio"
          name="gender"
        />
        <span>Male</span>
        <input
          value={"Female"}
          onChange={getGender}
          className="m-1"
          type="radio"
          name="gender"
        />
        <span>Female</span>
      </div>
      <div>
        <span className="fw-bold m-1">Skills :</span>
        <input value={"C-language"} onChange={getSkills}  className="m-2" type="checkbox" /> C
        <input value={"HTML-language"} onChange={getSkills} className="m-2" type="checkbox" />
        HTML
        <input value={"CSS-language"} onChange={getSkills} className="m-2" type="checkbox" />
        CSS
        <input value={"JS"} onChange={getSkills} className="m-2" type="checkbox" />
        JS
        <input value={"ReactJS"} onChange={getSkills} className="m-2" type="checkbox" />
        ReactJS
      </div>
      <div>
        <span className="fw-bold m-1">City:</span>
        <select onChange={getCity} className="m-2">
          <option value={"surat"}>Surat</option>
          <option value={"vadodara"}>Vadodara</option>
          <option value={"ahemdabad"}>Ahemdabad</option>
          <option value={"delhi"}>Delhi</option>
        </select>
      </div>
      <div>
        <textarea
          onChange={getAddress}
          className="m-2"
          placeholder="Address"
        ></textarea>
      </div>
      <div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </>
  );
}

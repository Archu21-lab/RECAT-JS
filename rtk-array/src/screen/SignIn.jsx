import React, { useRef } from "react";
import { Link , useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function SignIn() {
    const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSignIn = () => {
    if (
      emailRef.current.value == user.email &&
      passwordRef.current.value == user.password
    ) {
        navigate("/home")
    }else{
        alert("email or password is wrong !")
    }
  };
  return (
    <div>
      <h1>SignIn</h1>
      <div>
        <input ref={emailRef} type="text" placeholder="Enter Email" />
      </div>
      <div>
        <input ref={passwordRef} type="text" placeholder="Enter Password" />
      </div>
      <div>
        <button onClick={handleSignIn}>SignIn</button>
      </div>
      <p>
        Don't Have An Account? <Link to={"/signup"}>SignUp</Link>
      </p>
    </div>
  );
}

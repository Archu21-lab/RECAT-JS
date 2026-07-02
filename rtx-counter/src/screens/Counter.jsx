import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/slices/counterSlice.js";

function Counter() {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.Counter);
  return (
    <div>
      Counter
      <h1>{count}</h1>
      <button onClick={dispatch(increment())}>++</button>
      <button onClick={dispatch(decrement())}>--</button>
    </div>
  );
}

export default Counter;

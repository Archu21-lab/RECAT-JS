import React, { useState, useContext, createContext } from "react";

export const CounterContext = createContext();
export default function ContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const addition = () => setCount(count + 1);
  const substraction = () => setCount(count - 1);

  return (
    <CounterContext value={{ count, addition, substraction }}>
      {children}
    </CounterContext>
  );
}

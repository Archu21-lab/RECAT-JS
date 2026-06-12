import React from "react";
import Input from "../components/input";

export default function Home({ name }) {
  return (
    <div>
      <Input appName={name} />
    </div>
  );
}

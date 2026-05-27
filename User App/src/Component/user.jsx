import allUsers from "../data/user.js";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState(allUsers);
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user, i) => (
        <div key={i}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
      <button
        onClick={() => {
          setUsers([...users, { name: "sahil", email: "sahil@yahoo.com" }]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default User;

import allUsers from "../data/user.js";
import { useState } from "react";

const User = () => {
  const [users, setUsers] = useState(allUsers);
  return (
    <div>
      <h1>All Users</h1>
      {users.map((user, i) => (
        <div key={i}>
          <img src={user.image}></img>
          <h3>{user.name}</h3>
          <p>{user.email}</p>

          <button
            className="btn btn-danger m-2"
            onClick={() => {
              const temp =[...users]
              temp.splice(i,1)
              setUsers(temp);
            }}
          >
            delete
          </button>
        </div>
      ))}
      <button
        className="btn btn-primary"
        onClick={() => {
          const temp = [...users];
          temp.push({ name: "sahil", email: "sahil@yahoo.com" });
          setUsers(temp);
          //setUsers([...users, { name: "sahil", email: "sahil@yahoo.com" }]);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default User;

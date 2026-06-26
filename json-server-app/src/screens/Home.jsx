import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});

  const getName = (e) => setData({ ...data, name: e.target.value });
  const getRole = (e) => setData({ ...data, role: e.target.value });

  const handleSetUsers = async () => {
    const res = await axios.post("http://localhost:3000/users", data);
   if(res.status==201){
    alert("users Inserted Successfully !")
   }else{
    alert("can't Add User !")
   }
  };

  const handleFetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  return (
    <div>
      <input onChange={getName} type="text" placeholder="Enter Name" />
      <input onChange={getRole} type="text" placeholder="Enter Role" />
      <button
        onClick={async() => {
        await  handleSetUsers();
         await handleFetchUsers();
        }}
      >
        Submit
      </button>
      <div>
        {users.length == 0 ? (
          <p>No Users</p>
        ) : (
          users.map((user, i) => {
           return( <div key={i}>
              <p>{user.name}</p>
            </div>)
          })
        )}
      </div>
    </div>
  );
}

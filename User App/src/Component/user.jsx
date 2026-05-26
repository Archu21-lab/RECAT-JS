import allUsers from "../data/user.js";

const User = () => {
  return <div>
    <h1>All Users</h1>
    {
        allUsers.map((User)=><div>
            
        </div>)
    }
  </div>;
};

export default User;

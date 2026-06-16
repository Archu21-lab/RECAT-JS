import React from "react";

export default function Display(app, name,setName) {
  return (
    <div>
      display 
      <p>
        <h3>{app}</h3>
        {name}- <button onClick={()=>{
          setName("")
        }}>Clear</button>

      </p>
      
    </div>
  );
}

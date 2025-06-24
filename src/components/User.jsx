import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h3> Name : {name} </h3>
      <h3> Location : Jamshedpur, Jharkhand</h3>
      <h3> Email : ashutosh75jsr@gmail.com</h3>
    </div>
  );
};

export default User;

import { useState, useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("API called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component unmounted, timer cleared");
    };
  }, []);

  return (
    <div className="user-card">
      <h3> Name : {name} </h3>
      <h3> Location : Jamshedpur, Jharkhand</h3>
      <h3> Email : ashutosh75jsr@gmail.com</h3>
    </div>
  );
};

export default User;

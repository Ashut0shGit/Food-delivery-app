import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const HeadingComponent = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="heading">
      <div className="logo-container">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About us </li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="btnName"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;

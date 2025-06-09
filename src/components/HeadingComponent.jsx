import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeadingComponent = () => {
  let [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="heading">
      <div className="logo-container">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About us </Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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

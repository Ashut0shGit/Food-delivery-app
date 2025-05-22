import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React element(object) => HTML render
// JSX => BABEL => Javascript

const Heading = () => <h1>Namaste React using JSX 🚀</h1>;

//React Functional component

const HeadingComponent = () => (
  <div id="container">
    <Heading />
    <h1> Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

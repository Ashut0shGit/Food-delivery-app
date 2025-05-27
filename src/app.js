import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";

// React.createElement => React element(object) => HTML render
// JSX => BABEL => Javascript

const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

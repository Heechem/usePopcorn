import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import AppCopyV2 from "./App copy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppCopyV2 />
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={20}
      color="red"
      defaultRating={1}
    /> */}
  </React.StrictMode>
);

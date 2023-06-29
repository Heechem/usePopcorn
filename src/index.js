import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";
import AppCopyV2 from "./AppCopy";
import AppCopy from "./AppCopy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppCopy />
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

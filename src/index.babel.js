import React from "react";
import { createRoot } from "react-dom/client";
import { handleSubmit } from "./controllers/handleSubmit";
const message = "hello gorgeous!!!!!!!";
const root = createRoot(window.bodyTag);
root.render(/*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "OhThouReiki"), /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("form", {
  onSubmit: handleSubmit
}, /*#__PURE__*/React.createElement("input", {
  id: "",
  type: ""
}), /*#__PURE__*/React.createElement("input", {
  id: "",
  type: "email"
}), /*#__PURE__*/React.createElement("input", {
  id: "Submit",
  type: "submit"
})), /*#__PURE__*/React.createElement("iframe", {
  width: "560",
  height: "315",
  src: "https://www.youtube.com/embed/8cWrYFMGxbo?si=-e5-9tHUdt8ttmta",
  title: "YouTube video player",
  frameBorder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  referrerPolicy: "strict-origin-when-cross-origin",
  allowFullScreen: true
})));

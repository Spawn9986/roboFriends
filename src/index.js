import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // when importing from non JS file
import Card from "./Card"; // when importing from file
import "tachyons"; // when importing from dependencies
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  </div>
);

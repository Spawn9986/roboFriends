import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // when importing from non JS file
import CardList from "./CardList";
import "tachyons"; // when importing from dependencies
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardList robots={robots} />);

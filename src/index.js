import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./main";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Note: The JSX below will be transformed to a call like this:
// root.render(React.createElement("h1", null, "TODO App"));
root.render(<Main />);

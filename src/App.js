import React from "react";
import "./App.css";
import Router from "./routes/Router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router></Router>
      </div>
    </React.Fragment>
  );
}

export default App;

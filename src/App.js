import React from "react";
import weather from "./weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <weather />
      </header>
    </div>
  );
}

export default App;

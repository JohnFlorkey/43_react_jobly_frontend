import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <NavBar />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

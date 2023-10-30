import React from "react";
// importing componenets
import Header from "./components/Header";
import NavBar from "./components/Navbar";
// importing router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <NavBar />
    </Router>
    </>
  );
}

export default App;

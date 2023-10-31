import React from "react";
// importing componenets
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
// importing router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <NavBar />
      <Footer />
    </Router>
    </>
  );
}

export default App;

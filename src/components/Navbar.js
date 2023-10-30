import React from "react";
// importing pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
// importing routes route and uselocation hook
import { Routes, Route, uselocation } from 'react-router-dom';

const NavBar = () => {
  return <Routes>
    <Route path='/' element={<Home/ >} />
    <Route path='/about' element={<About/ >} />
    <Route path='/portfolio' element={<Portfolio/ >} />
  </Routes>
};

export default NavBar;

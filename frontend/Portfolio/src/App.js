import React from "react";
import "./App.scss";

import Navbar from "./navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";
import Copyright from "./pages/Copyright/Copyright";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
      <Copyright />
    </div>
  );
};

export default App;

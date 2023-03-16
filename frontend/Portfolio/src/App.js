// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";

// function PageA() {
//   return <h1>Page a</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route path="a" element={<PageA />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

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

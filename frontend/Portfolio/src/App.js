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

import Navbar from "./navbar/Navbar";
import About from "./pages/About/About";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;

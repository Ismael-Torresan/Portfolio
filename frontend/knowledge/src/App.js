import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function PageA() {
  return <h1>Page a</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="a" element={<PageA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

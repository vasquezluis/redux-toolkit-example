import "./App.css";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Resume from "./components/Resume1.js";
import Resume2 from "./components/Resume2.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume1" element={<Resume />} />
          <Route path="/resume2" element={<Resume2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

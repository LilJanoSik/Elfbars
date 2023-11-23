import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Create from "./pages/Create";
import About from "./pages/About";
import Edit from "./pages/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

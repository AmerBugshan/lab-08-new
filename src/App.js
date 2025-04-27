import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

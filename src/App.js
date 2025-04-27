import "./styles.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes } from "react-router";

export default function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
    </div>
  );
}

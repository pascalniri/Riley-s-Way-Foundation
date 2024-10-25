import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Achieve from "./components/Achieve";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Achieve />
      <Cards />
    </div>
  );
}

export default App;

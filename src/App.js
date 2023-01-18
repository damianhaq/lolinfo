import { Route, Routes } from "react-router-dom";
import Champions from "./pages/champions/Champions";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Champion from "./pages/champions/champion/Champion";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/champions/:id" element={<Champion />} />
      </Routes>
    </div>
  );
}

export default App;

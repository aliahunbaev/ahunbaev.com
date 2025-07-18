import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Writing from "./pages/Writing"; // or whatever your writing page is
import Favorites from "./pages/Favorites"; // or whatever your writing page is
import Essay from "./pages/Essay";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/:slug" element={<Essay />} />
      </Routes>
    </Router>
  );
}

export default App;

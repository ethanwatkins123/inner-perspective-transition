import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./app.scss";

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Practice from "./pages/Pratice.jsx";
//import Docs from "./pages/Docs";
//import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Practice />} />
        {/* <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
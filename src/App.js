import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OtherInfo from "./components/OtherInfo";
import Footer from "./components/Footer";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Index() {
  return (
    <div className="dark:bg-[#0b0e11] transition-colors duration-100">
      <Navbar />
      <Hero />
      <OtherInfo />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

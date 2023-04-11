import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/Ibrahim-Portfolio" element={<Home />} />
        <Route path="Ibrahim-Projects" element={<Projects />} />
        <Route path="Contact-Ibrahim" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

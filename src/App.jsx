import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="My-Projects" element={<Projects />} />
        <Route path="Contact-Me" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Personal from "./components/personal";

function AppRoutes() {
  const location = useLocation();
  const hideHeader = location.pathname === '/personal' || location.pathname === '/contact';

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Dashboard />
            <Experience />
            <Project />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal" element={<Personal />} /> 
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Dashboard />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}

export default App;

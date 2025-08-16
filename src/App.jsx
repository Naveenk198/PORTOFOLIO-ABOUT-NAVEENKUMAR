import { useState } from "react";
import "./App.css";
import Portofolio from "./component/Portofolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Resume from "./component/Resume";

function App() {
  return (
    <div className="app">
      <Router>
        <Portofolio />
        <Routes>
          <Route path="/" element={<AboutMe />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

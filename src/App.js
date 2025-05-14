import './App.css';
import NavBar from './components/NavBar';
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
function App() {
  return (
    <>
        <NavBar />
        <Routes> 
          <Route path="/" element={<Navigate replace to="/landing" />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
    </>

  );
}

export default App;

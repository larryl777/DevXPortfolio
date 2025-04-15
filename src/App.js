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
    <div>
      <NavBar />
      <Routes> 
        <Route path="/" element={<Navigate replace to="/landing"/>}> </Route>    {/*Set /landing to default page */}
        <Route path="/landing" element = {<Landing/>}> </Route>
        <Route path="/projects" element = {<Projects/>}> </Route>
        <Route path="/experience" element = {<Experience/>}> </Route>
        <Route path="/contact" element = {<Contact/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;

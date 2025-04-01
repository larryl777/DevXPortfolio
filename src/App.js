import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom"
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/landing">Home</Link> | <Link to="/projects">Projects</Link> | <Link to="/experience">Experience</Link> | <Link to="/contact">Contact Me</Link> 
      </nav>
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

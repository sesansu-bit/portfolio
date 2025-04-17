import './App.css';
import Navbar from "./navbar.jsx";
import About from "./about.jsx";
import Skill from "./skill.jsx";
import Project from "./project.jsx"; 
import Contact from "./contact.jsx";
function App() {
  return (
    <>
     <Navbar></Navbar>
     <About></About>
     <Skill></Skill>
     <Project></Project>
     <Contact></Contact>
    </>
  )
}

export default App;

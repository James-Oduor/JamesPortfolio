import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Work from "./components/Works/work";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App

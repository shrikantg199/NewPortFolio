import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skiils";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

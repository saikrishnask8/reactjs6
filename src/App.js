import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//import Components
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="main-box">
      <Nav />

      <Home />
      <AboutMe />
      <Skills />

      <Contact />
    </div>
  );
}

export default App;

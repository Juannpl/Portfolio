import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  const [isVisible, setIsVisible] = useState([false, false, false]);

  useEffect(() => {
    // Définir des délais pour retarder l'apparition des éléments
    const timeouts = [
      setTimeout(() => {
        setIsVisible((prev) => [true, ...prev.slice(1)]);
      }, 1000), // Premier élément après 1 seconde
      setTimeout(() => {
        setIsVisible((prev) => [...prev.slice(0, 1), true, ...prev.slice(2)]);
      }, 2000), // Deuxième élément après 2 secondes
      // Ajoutez des délais supplémentaires pour d'autres éléments...
    ];

    // Nettoyer les timeouts lors du démontage du composant
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="App" id="Home">
      <header className="headerApp">
        <NavBar />
      </header>
      <main className="mainApp">
        <div className="present">
          <div className={`presentLeft ${isVisible[0] ? "fadeInUp" : ""}`}>
            <p className="middleSize">Salut, c'est moi</p>
            <br></br>
            <p className="tallSize">
              <span>Juan-Pablo Londono Ramirez</span>
            </p>

            <p className="smallSize">C'est vrai que c'est un peu long...</p>
          </div>
          <div className={`presentRight ${isVisible[1] ? "fadeInUp" : ""}`}>
            <p className="tallSize">
              Alors appelez moi <span>Juan</span>
            </p>
            <p className="smallSize">
              j'étudie le{" "}
              <span>Développement et la Conception d'Application</span>
            </p>
          </div>
          <div className="link">
            <ul className="linkItems">
              <li className="linkItem">
                <a href="https://github.com/Juannpl" target="_blank">
                  <box-icon
                    name="github"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
              </li>
              <li className="linkItem">
                <a href="https://www.linkedin.com/in/juannpl/" target="_blank">
                  <box-icon
                    name="linkedin"
                    type="logo"
                    color="#ffffff"
                  ></box-icon>
                </a>
              </li>
              <li className="linkItem">
                <a href="mailto:jlondono446@gmail.com">
                  <box-icon name="gmail" type="logo" color="#ffffff"></box-icon>
                </a>
              </li>
              <li className="linkItem monCv">
                <a href="./CV_AlternDev.pdf" target="_blank">
                  <box-icon name="download" color="black"></box-icon>
                  <p>MON CV</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

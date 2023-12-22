import React from "react";
import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <div className="aboutParent">
      <div className="title" id="about">
        <h2>About.</h2>
      </div>
      <div className="aboutContent">
        <div className="aboutTextContent">
          <h1>Développeur Concepteur d’Application</h1>
          <p>
            Passionné de développement web en quête d'excellence. Je suis
            actuellement étudiant en troisième année, poursuivant un bachelor en
            développement et conception d’application.<br></br>
            <br></br> Mon parcours académique et professionnel m'a permis
            d'acquérir une solide expertise en tant que développeur full-stack.
            <br></br>
            <br></br>
            Je suis fasciné par le monde numérique et je m'efforce de créer des
            expériences en ligne exceptionnelles. Mon approche repose sur une
            combinaison de créativité et de compétences techniques approfondies.
            <br></br>
            <br></br>
            Ma passion pour le code et la conception m'a conduit à explorer
            divers domaines du développement web, de la création d'interfaces
            utilisateur intuitives à la mise en œuvre de fonctionnalités
            robustes côté serveur.
          </p>
        </div>
        <div className="aboutImageContent">
          <img
            src="./imageJuan.jpg"
            alt="Pellicule de Juan-Pablo Londono Ramirez"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;

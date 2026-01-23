import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import htmlImg from "../assets/react2.webp";
import phpImg from "../assets/php.png";
import cppImg from "../assets/c++.png";
import sqlImg from "../assets/postgre2.png";
import javaImg from "../assets/java2.png";
import gitImg from "../assets/github2.png";
import linuxImg from "../assets/linux3.webp";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        {language === "fr" ? "Mes Compétences" : "My Skills"}
      </h2>
      <p className="skills-intro">
        {language === "fr"
          ? "Voici un aperçu des langages, outils et technologies que j’ai appris et utilisés dans mes projets :"
          : "Here’s an overview of the languages, tools, and technologies I’ve learned and used in my projects :"}
      </p>
      <div className="skills-grid">
        
        <div className="skill-card">
           <div className="bg">
            <img src={phpImg} alt="PHP" className="skill-icon" />
            <h4 className="skill-title">Laravel, Yii</h4>
            <p className="skill-description">
              {language === "fr"
                ? "Développement back-end et conception de logique serveur."
                : "Back-end development and server-side logic design."}
            </p>
          </div>
          <div className="blob php"></div>
        </div>

        <div className="skill-card">
          <div className="bg">
            <img src={htmlImg} alt="HTML CSS JS" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Création d’interfaces web structurées, stylisées et interactives."
                : "Building structured, styled, and interactive web interfaces."}
            </p>
          </div>
          <div className="blob react"></div>
        </div>

        <div className="skill-card">
          <div className="bg">
            <img src={javaImg} alt="Java" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Programmation orientée objet et structuration d’applications."
                : "Object-oriented programming and application structuring."}
            </p>
          </div>
          <div className="blob"></div>
        </div>
        
        <div className="skill-card">
          <div className="bg">
            <img src={cppImg} alt="C++" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Implémentation d’algorithmes et de structures de données."
                : "Implementation of algorithms and data structures."}
            </p>
          </div>
          <div className="blob cpp"></div>
        </div>

        <div className="skill-card">
          <div className="bg">
            <img src={sqlImg} alt="SQL PostgreSQL" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Écriture de requêtes SQL et gestion de bases de données relationnelles."
                : "Writing SQL queries and managing relational databases."}
            </p>
          </div>
          <div className="blob sql"></div>
        </div>

        <div className="skill-card">
          <div className="bg">
            <img src={gitImg} alt="Git GitHub" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Gestion de versions et collaboration en équipe."
                : "Version control and team collaboration."}
            </p>
          </div>
          <div className="blob git"></div>
        </div>

        <div className="skill-card">
          <div className="bg">
            <img src={linuxImg} alt="Linux Bash" className="skill-icon" />
            <p className="skill-description">
              {language === "fr"
                ? "Utilisation de la ligne de commande et scripts shell."
                : "Command-line usage and shell scripting."}
            </p>
          </div>
          <div className="blob linux"></div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Skills;

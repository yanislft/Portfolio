import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

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
          : "Here’s an overview of the languages, tools, and technologies I’ve learned and used in my projects:"}
      </p>
      <div className="skills-grid">
        <div className="skill-card">
          <h4 className="skill-title">HTML / CSS / JavaScript</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Pages web structurées, stylées et interactives."
              : "Structured, styled, and interactive web pages."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">PHP</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Développement back-end avec logique serveur."
              : "Back-end development with server logic."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">C++</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Algorithmes et structures de données."
              : "Algorithms and data structures."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">SQL / PostgreSQL</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Requêtes et gestion de bases de données."
              : "Queries and database management."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">Java</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Programmation orientée objet avec JDBC."
              : "Object-oriented programming with JDBC."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">Git / GitHub</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Versionnage et travail en équipe."
              : "Version control and team collaboration."}
          </p>
        </div>
        <div className="skill-card">
          <h4 className="skill-title">Linux / Bash</h4>
          <p className="skill-description">
            {language === "fr"
              ? "Commandes et scripts shell."
              : "Shell commands and scripting."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

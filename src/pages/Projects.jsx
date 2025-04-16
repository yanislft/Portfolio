import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        {language === "fr" ? "Mes Projets" : "My Projects"}
      </h2>
      <p className="projects-intro">
        {language === "fr"
          ? "Voici une sélection de projets sur lesquels j'ai travaillé, illustrant mes compétences en développement web, algorithmique et modélisation."
          : "Here is a selection of projects I've worked on, showcasing my skills in web development, algorithmics, and modeling."}
      </p>
      <div className="projects-grid">
        <a
          href="https://github.com/yanislft/Gestion-superette"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3 className="project-title">
            {language === "fr"
              ? "Projet : Ma Supérette sur le Net"
              : "Project: My Online Grocery Store"}
          </h3>
          <p className="project-description">
            {language === "fr"
              ? "Application Java de gestion d’une supérette en ligne : gestion des produits, fournisseurs, ventes, lots, contrats, stocks, commandes et utilisateurs via PostgreSQL."
              : "Java application to manage an online grocery store: product, supplier, sales, lot, contract, stock, order and user management via PostgreSQL."}
          </p>
          <p className="project-tech">
            Technologies: Java, PostgreSQL, JDBC, SQL, Java OOP
          </p>
        </a>
        <a
          href="https://github.com/yanislft/Projet-R-seau-routier"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3 className="project-title">
            {language === "fr"
              ? "Projet Réseau routier (C++)"
              : "Road Network Project (C++)"}
          </h3>
          <p className="project-description">
            {language === "fr"
              ? "Implémentation de graphes orientés avec algorithmes de parcours à partir de fichiers CSV (nodes/arcs)."
              : "Implementation of directed graphs with traversal algorithms using CSV files (nodes/arcs)."}
          </p>
          <p className="project-tech">
            Technologies: C++, Graphs, Algorithms
          </p>
        </a>
        <a
          href="https://github.com/yanislft/Moteur-de-recherche"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3 className="project-title">
            {language === "fr"
              ? "Projet Wiki Search (Java)"
              : "Wiki Search Engine (Java)"}
          </h3>
          <p className="project-description">
            {language === "fr"
              ? "Moteur de recherche sur un corpus de documents utilisant TF-IDF et BM25, avec gestion de stopwords."
              : "Search engine over a document corpus using TF-IDF and BM25, with stopword handling."}
          </p>
          <p className="project-tech">
            Technologies: Java, Information Retrieval, TF-IDF, BM25
          </p>
        </a>
      </div>
      <p className="projects-more">
        {language === "fr" ? "Pour découvrir davantage de projets, rendez-vous sur " : "To discover more projects, visit "}
        <a
          href="https://github.com/yanislft"
          target="_blank"
          rel="noopener noreferrer"
          className="home-span"
        >
          {language === "fr" ? "mon profil GitHub" : "my GitHub profile"}
        </a>.
      </p>
    </section>
  );
};

export default Projects;
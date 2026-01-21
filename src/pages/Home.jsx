import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h2 className="home-title">{language === "fr" ? "Qui je suis ?" : "Who am I ?"}{" "}</h2>
        <p className="home-title-about">
          {language === "fr" ? "Bonjour, je suis" : "Hello, I'm"}{" "}
          <span className="home-span">Yanis Laftimi</span>
        </p>
        <p className="home-subtitle">
          {language === "fr"
            ? "Étudiant en informatique motivé, actuellement à la recherche d’un "
            : "Motivated computer science student currently seeking an "}
          <strong className="home-span">
            {language === "fr" ? "stage" : "internship"}
          </strong>{" "}
            {language === "fr"
            ? "et d'une "
            : "and a "}
            <strong className="home-span">
              {language === "fr" ? "alternance " : "work-study oportunity "}
            </strong>{" "}
          {language === "fr"
            ? "dans le domaine du développement web et logiciel."
            : "in web and software development."}
        </p>
        <p className="home-description">
          {language === "fr"
            ? "J’apprécie le travail sur des projets concrets, la structuration de solutions techniques et l’amélioration continue des applications, au sein d’un environnement collaboratif."
            : "I enjoy working on real-world projects, structuring technical solutions, and continuously improving applications in a collaborative environment."}
        </p>
      </div>
    </section>
  );
};

export default Home;
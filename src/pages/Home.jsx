import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h2 className="home-title">
          {language === "fr" ? "Bonjour, je suis" : "Hello, I'm"}{" "}
          <span className="home-span">Yanis Laftimi</span>
        </h2>
        <p className="home-subtitle">
          {language === "fr"
            ? "Étudiant en informatique motivé, actuellement à la recherche d’une "
            : "Motivated computer science student currently seeking a "}
          <strong className="home-span">
            {language === "fr" ? "alternance" : "work-study opportunity"}
          </strong>{" "}
          {language === "fr"
            ? "dans le domaine du développement web et logiciel."
            : "in web and software development."}
        </p>
        <p className="home-description">
          {language === "fr"
            ? "Je suis passionné par la création d'applications intuitives, la résolution de problèmes techniques, et je cherche à m'intégrer dans une équipe dynamique pour apprendre et contribuer à des projets concrets."
            : "Passionate about creating intuitive apps, solving technical challenges, and eager to learn and contribute within a dynamic team."}
        </p>
      </div>
    </section>
  );
};

export default Home;
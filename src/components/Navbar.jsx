import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Yanis Laftimi</h1>
        <ul className="navbar-links">
          <li><a href="#home" className="navbar-link">{language === "fr" ? "À propos" : "About me"}</a></li>
          <li><a href="#projects" className="navbar-link">{language === "fr" ? "Projets" : "Projects"}</a></li>
          <li><a href="#skills" className="navbar-link">{language === "fr" ? "Compétences" : "Skills"}</a></li>
          <li><a href="#contact" className="navbar-link">{language === "fr" ? "Contact" : "Contact"}</a></li>
        </ul>
        <button onClick={toggleLanguage} className="contact-button" style={{ marginLeft: "1rem" }}>
          {language === "fr" ? "🇬🇧 EN" : "🇫🇷 FR"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
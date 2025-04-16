import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        {language === "fr" ? "Me Contacter" : "Contact Me"}
      </h2>
      <p className="contact-intro">
        {language === "fr"
          ? "Vous pouvez me contacter par email ou via LinkedIn. N'hésitez pas à consulter ou télécharger mon CV ci-dessous."
          : "You can contact me by email or via LinkedIn. Feel free to view or download my resume below."}
      </p>

      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/yanis-laftimi-0a00b4358/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/yanislft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>

      <a href="/cv-yanis-laftimi.pdf" download className="contact-button">
        {language === "fr" ? "Télécharger mon CV" : "Download My Resume"}
      </a>
    </section>
  );
};

export default Contact;
import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import CericarImg from "../assets/CERICAR.svg";
import WithuImg from "../assets/withu3.png";
import RsnlImg from "../assets/rsnl.png";
import GithubButton from "../components/GithubButton.jsx";

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
          <div className="project-card-media">
            <img
              src={CericarImg}
              alt="project preview"
              className="project-card-image"
            />
          </div>
          <div className="project-card-content">
            <h3 className="project-title">
              {language === "fr"
                ? "Application web de covoiturage"
                : "Web Carpooling Application"}
            </h3>
            <p className="project-description">
              {language === "fr" ? (
                <>
                Plateforme permettant la recherche, proposition et réservation de trajets via une interface fluide en AJAX, avec gestion des profils et des réservations.
                </>
              ) : (
                  "A platform that allows users to search for, propose, and book trips through a smooth AJAX-based interface, with user profile and booking management"
              )}
            </p>
            <p className="project-tech">
              {language === "fr"
                ? "Technologies: Yii2, PHP, JavaScript et PostgreSQL"
                : "Technologies: Yii2, PHP, JavaScript and PostgreSQL"}
              
            </p>

            <div className="github-button-wrapper">
                  <GithubButton />
              </div>

          </div>
        </a>
        <a
          href="https://github.com/yanislft/Projet-R-seau-routier"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-media">
            <img
              src={WithuImg}
              alt="project preview"
              className="project-card-image withu-image"
            />
          </div>
          <div className="project-card-content">
            <h3 className="project-title">
              {language === "fr"
                ? "Application web de communication en temps réel"
                : "Real-Time Communication Web Application"}
            </h3>
            <p className="project-description">
              {language === "fr"
                ? "Plateforme permettant la création de salons, la messagerie instantanée, le visionnage synchronisé de vidéos YouTube et les échanges en temps réel entre utilisateurs, avec gestion de l’authentification et des profils via une interface moderne et interactive."
                : "A platform that enables the creation of chat rooms, instant messaging, synchronized YouTube video watching, and real-time interactions between users, with authentication and profile management through a modern and interactive interface."}
            </p>
            <p className="project-tech">
              Technologies: Laravel, Laravel Reverb, JWT, React, PostgreSQL, YouTube IFrame API
            </p>

              <div className="github-button-wrapper">
                  <GithubButton />
              </div>

          </div>
        </a>
        <a
          href="https://github.com/yanislft/Moteur-de-recherche"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <div className="project-card-media">
            <img
              src={RsnlImg}
              alt="project preview"
              className="project-card-image withu-image"
            />
          </div>
          <div className="project-card-content">
            <h3 className="project-title">
              {language === "fr"
                ? "Application web de location de voiture"
                : "Car Rental Web Application"}
            </h3>
            <p className="project-description">
              {language === "fr"
                ? 
                (
                <>
                Plateforme permettant aux utilisateurs de consulter un showroom en ligne, de réserver un véhicule et de gérer leur compte. Une interface d’administration sécurisée permet de gérer les utilisateurs et les véhicules. 
                <br />
                Le projet intègre des fonctionnalités de connexion avec sessions, cookies, envoi d’e-mails et protection CSRF.
                </>
              ) : (
                <>
                  A platform that allows users to browse an online showroom, book a vehicle, and manage their account.
                  A secure administration interface enables user and vehicle management.
                  <br />
                  The project includes authentication with sessions and cookies, email sending, and CSRF protection.
                </>
              )}
            </p>
            <p className="project-tech">
              Technologies: PHP, JavaScript, PostgreSQL
            </p>

               <div className="github-button-wrapper">
                  <GithubButton />
              </div>
          </div>
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
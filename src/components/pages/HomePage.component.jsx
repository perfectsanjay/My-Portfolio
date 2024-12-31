import React from "react";
import "./HomePage.styles.scss";
import { Link } from "react-router-dom";
import shoesImage from "/Users/sanjaysingh/Desktop/my-portfolio/public/White and Black Simple Shoes Store Logo.png";
import trackerImage from "/Users/sanjaysingh/Desktop/my-portfolio/public/tip-tracker.png";
import clothingImage from "/Users/sanjaysingh/Desktop/my-portfolio/public/CRWN-Clothing.png";
import javascriptlogo from "/Users/sanjaysingh/Desktop/my-portfolio/public/JavaScript-logo.png";
import reduxlogo from "/Users/sanjaysingh/Desktop/my-portfolio/public/redux.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const projects = [
    {
      id: 1,
      name: "shoes-store",
      image: shoesImage,
      description: "An e-commerce website for purchasing shoes.",
      Link: "https://jootadukan.vercel.app/",
      GithubLink: "https://github.com/perfectsanjay/shoes-store",
    },
    {
      id: 2,
      name: "ip-address-tracker",
      image: trackerImage,
      description:
        "An ip-tracker website by using ip addresss you can track ip location",
      Link: "https://ip-address-tracker-rho-azure.vercel.app/",
      GithubLink: "https://github.com/perfectsanjay/ip-address-tracker",
    },
    {
      id: 3,
      name: "crwn-clothing",
      image: clothingImage,
      description: "An e-commerce website for purchasing clothes",
      Link: "https://crwn-clothing-store.vercel.app/",
      GithubLink: "https://github.com/perfectsanjay/crwn-clothing",
    },
  ];

  return (
    <>
      <div className="intro-container">
        <h1 className="title">FRONTEND DEVELOPER</h1>
        <h1 className="name">HEY, I'M SANJAY SINGH</h1>
        <ul className="tech-list">
          <img
            className="react-logo"
            src="react-1-logo-svg-vector.svg"
            alt="react logo"
          />
          <li>REACT</li>
          <img className="redux-logo" src={reduxlogo} alt="reduxlogo" />
          <li>REDUX</li>
          <img
            className="javascript-logo"
            src={javascriptlogo}
            alt="javascriptlogo"
          />
          <li>JAVASCRIPT</li>
        </ul>
      </div>
      <h2 className="projects">PROJECTS</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              className="project-image"
              src={project.image}
              alt="shoes-store"
            />
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <a href={project.Link} target="_blank" className="project-link">
              View Project
            </a>
            <a
              href={project.GithubLink}
              target="_blank"
              className="github-button"
            >
              Github
            </a>
          </div>
        ))}
      </div>
      <div className="footer-container">
        <a
          href="https://github.com/perfectsanjay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="contact-icon"
            style={{ color: "white" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/sanjay-tanwar-2680811b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" style={{ color: "white"}} />
        </a>
      </div>
    </>
  );
};

export default HomePage;

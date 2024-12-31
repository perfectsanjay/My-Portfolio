import React from "react";
import './Projects.styles.scss'
import shoesImage from '/Users/sanjaysingh/Desktop/my-portfolio/public/White and Black Simple Shoes Store Logo.png';

const Project = () => {
    const projects = [
        {
            id:1,
            name:"shoes-store",
            image: shoesImage,
            description:"An e-commerce website for purchasing shoes.",
            Link: "https://jootadukan.vercel.app/"

        }
    ]
    return(
        <div className="projects-container">
            {projects.map((project) => (
                <div className="project-card" key={project.id}>
                    <img className="project-image" src={shoesImage} alt="shoes-store" />
                    <h2 className="project-name">{project.name}</h2>
                    <p className="project-description">{project.description}</p>
                    <a href={project.Link} target="_blank" className="project-link">View Project</a>
                </div>
            ))}
            

        </div>
    )
}

export default Project;
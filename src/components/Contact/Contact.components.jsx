import React from "react";
import './Contact.styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="contact-container">
            <a href="https://github.com/perfectsanjay" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            </a>
           
            <a href="https://www.linkedin.com/in/sanjay-tanwar-2680811b3/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
           
        </div>
    );
};

export default Contact;

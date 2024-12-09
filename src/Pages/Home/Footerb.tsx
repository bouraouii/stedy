import React from "react";
import myImage from "../../Image/logo13.svg";
import linkedin from "../../Image/linkedin.svg";

import "./StyleFooter.css";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Section noire */}
      <div className="footer-black"> 
        <img src={myImage} alt="Logo StedY" />
        <div className="footer-content">
          <h1 className="footer-logo">
           
          </h1>
          <p className="footer-description" style={{textAlign:"center"}}>
            StedY replace les talents et les projets au cœur du métier de
            conseil en Technologies & Services numériques.
          </p>
          <a
            href="#!"
            className="footer-linkedin"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Lien LinkedIn" />
          </a>
        </div>
      </div>

      {/* Section grise */}
      <div className="footer-gray">
        <p>© copyright 2024 StedY – Mentions Légales</p>
      </div>
    </footer>
  );
};

export default Footer;

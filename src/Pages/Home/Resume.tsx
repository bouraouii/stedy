import React from "react";
import myImage from "../../Image/rpo999.svg"; // Assuming the image is correctly located in the 'Image' folder
import "./RPOSection.css";

const RPOSection = () => {
  return (
    <div className="rpo-container">
      {/* Text Section */}
      <div className="rpo-text">
        <h2>StedY c'est aussi du RPO</h2>
        <h3>Le RPO by StedY, c'est quoi ?</h3>
        <p>
          Le RPO (Recruitment Process Outsourcing) vous permet de disposer
          rapidement de l’expertise d'un StedYer, un RH spécialiste du sourcing
          et de l’engagement des profils tech et numérique, quand le besoin
          s’en fait sentir.
        </p>
        <p>
          Immédiatement opérationnel, rompu aux stratégies d’approche de ces
          talents rares et recherchés, il vous aide à atteindre plus
          rapidement vos objectifs de recrutement tout en éliminant les risques
          liés à l’embauche d'une nouvelle ressource.
        </p>
        <p>
          <em>
            * Un expert RH à l’expérience “confirmée” (5 ans) et disposant des
            mêmes outils que ceux de nos équipes représente un coût global
            annuel d’environ 100 K€.
          </em>
        </p>
      </div>

      {/* Graphic Section */}
      <div className="rpo-graphics">
        <div className="rpo-box rpo-recruitment">
          {/* Correct usage of image inside div */}
          <img src={myImage} alt="RPO Graphic" className="rpo-image" />
        </div>
      </div>
    </div>
  );
};

export default RPOSection;

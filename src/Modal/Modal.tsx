// CustomCard.tsx
import React from "react";
import { Card, CardBody } from "reactstrap";
import "./CustomCard.css";







function ModalComponent() {
  return (
   <div className="card-container">
  <div className="custom-card-wrapper">
    <Card className="custom-card">
      <CardBody>
        <h3 className="card-title">Talents</h3>
        <div className="card-section">
          <h5 className="section-title">Rémunération optimisée</h5>
          <p className="section-text">
            Afin de rendre la part qui vous revient, nous pratiquons un des
            taux de commissionnement les plus bas du marché.
          </p>
        </div>
        <div className="card-section">
          <h5 className="section-title">Choix dans vos missions</h5>
          <p className="section-text">
            Nos Talents Manager vous proposerons l’intégralité des missions
            de nos clients. Vous pourrez alors vous positionner sur celles
            qui vous ressemblent, selon vos compétences et vos attentes.
          </p>
        </div>
        <div className="card-section">
          <h5 className="section-title">Autonomie et gestion de carrière</h5>
          <p className="section-text">
            Bénéficiez d’un accompagnement personnalisé lorsque vous êtes
            prêt à embrasser le statut d’indépendant.
          </p>
        </div>
      </CardBody>
    </Card>
    <Card className="custom-card">
      <CardBody>
        <h3 className="card-title">Talents</h3>
        <div className="card-section">
          <h5 className="section-title">Rémunération optimisée</h5>
          <p className="section-text">
            Afin de rendre la part qui vous revient, nous pratiquons un des
            taux de commissionnement les plus bas du marché.
          </p>
        </div>
        <div className="card-section">
          <h5 className="section-title">Choix dans vos missions</h5>
          <p className="section-text">
            Nos Talents Manager vous proposerons l’intégralité des missions
            de nos clients. Vous pourrez alors vous positionner sur celles
            qui vous ressemblent, selon vos compétences et vos attentes.
          </p>
        </div>
        <div className="card-section">
          <h5 className="section-title">Autonomie et gestion de carrière</h5>
          <p className="section-text">
            Bénéficiez d’un accompagnement personnalisé lorsque vous êtes
            prêt à embrasser le statut d’indépendant.
          </p>
        </div>
      </CardBody>
    </Card>
  </div>
</div>

  );
};

export default ModalComponent;

// CustomCard.tsx
import React from "react";
import { CardBody } from "reactstrap";
import "./CustomCard.css";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

function CardHeader() {
  const dataSlice: any = useSelector((state: RootState) => state.data.data);

  return (
    <div className="cards-container">
      {[dataSlice[2], dataSlice[3]].map((card, cardIndex) => (
        <div key={cardIndex} className="custom-card">
          <CardBody>
            <h3 className="card-title my-2 ">{card?.title}</h3>
            {card.sections.map((section: any, sectionIndex: any) => (
              <div key={sectionIndex} className="card-section">
                <h5 className="section-title">{section?.title}</h5>
                <p className="section-text">{section?.content}</p>
              </div>
            ))}
          </CardBody>
        </div>
      ))}
    </div>
  );
}

export default CardHeader;

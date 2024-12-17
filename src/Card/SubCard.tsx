// CustomCard.tsx
import { CardBody } from "reactstrap";
import "./CustomCard.css";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

function SubCard() {
  const dataSlice: any = useSelector((state: RootState) => state.data.data);

  return (
    <div className="cards-container">
      {[dataSlice[5], dataSlice[6]].map((card, cardIndex) => (
        <div key={cardIndex} className="custom-card">
          <CardBody>
            <h3 className="card-title ">{card?.title}</h3>
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

export default SubCard;
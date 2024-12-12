import React from "react";
import Select from "react-select";
import { structureData } from "../Constant/data";
import { placeholder } from "glamor";
import myImage from "../Image/iconUpdate.svg";
import { Input } from "reactstrap";

type UpdatecardHeaderTyping = {
  isOpen: boolean;
  setIsOpen: Function;
  setNomberHeader:Function
};

export default function UpdatecardHeader({
  isOpen,
  setIsOpen,
  setNomberHeader
}: UpdatecardHeaderTyping) {
  const options = Object.values(structureData[2]).map((el) => {
    return { value: el.title, label: el.title };
  });

  const [cardHeader, setCardHeader] = React.useState(options[0]);
React.useEffect(()=>{


    setNomberHeader("test")
},[])
  return (
    <div>
      <div>
        <Select
          options={options}
          value={cardHeader}
          onChange={(e: any) => {
            setCardHeader(e);
             setNomberHeader(`2/${cardHeader.label}`)

          }}
          className=""
        />
      </div>
      les content of {cardHeader.label} :
      <div>
        <div>
          {Object.values(structureData[2]).map((el, index) => {
            if (el.title === cardHeader.label) {
              return (
                <div key={index}>
                  {Object.values(el.subtailte).map((sub, subIndex) => (
                    <div key={subIndex} className="d-flex my-2 mx-2">
                      {/* Image + Input pour title */}
                      <span
                        className="mx-2 cursor-pointer"
                        onClick={(el) => {
                          setIsOpen(true);
                        }}
                      >
                        <img src={myImage} alt="Description de l'image" />
                      </span>
                      <Input
                        type="textarea"
                        placeholder={sub.title} // Placeholder pour le titre
                        className="mr-2"
                        rows="4" // Nombre de lignes visibles
                        style={{
                          width: "70%",
                          resize: "vertical", // Permet de redimensionner verticalement
                          padding: "10px",
                          fontSize: "16px",
                          boxSizing: "border-box", // Inclure padding dans largeur
                          overflow: "auto",
                        }}
                        disabled
                        // Ajouter une marge à droite entre les deux Inputs
                      />

                      {/* Image + Input pour content */}
                      <span
                        className="mx-2 cursor-pointer"
                        onClick={(el) => {
                          setIsOpen(true);
                        }}
                      >
                        <img src={myImage} alt="Description de l'image" />
                      </span>
                      <Input
                        type="textarea"
                        placeholder={sub.content}
                        rows="4"
                        style={{
                          width: "70%",
                          resize: "vertical", // Permet de redimensionner verticalement
                          padding: "10px",
                          fontSize: "16px",
                          boxSizing: "border-box", // Inclure padding dans largeur
                          overflow: "auto",
                        }}
                        disabled
                        // Placeholder pour le contenu
                      />
                    </div>
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>
      
    </div>
  );
}

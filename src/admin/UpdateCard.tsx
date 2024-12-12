import React from "react";
import { Button, Input } from "reactstrap"; // Assurez-vous que vous avez importé Input correctement, selon la bibliothèque
import myImage from "../Image/iconUpdate.svg";

import "./Sidebar.css";
import ModalUpdate from "./ModalUpdate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../features/store";
import { setData } from "../features/dataSlice";
import { structureData, structureData1 } from "../Constant/data";
import UpdatecardHeader from "./UpdatecardHeader";
import AppTest from "./Arbre";

export default function UpdateCard() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [nomberHeader, setNomberHeader] = React.useState("0");

  const dataSlice = useSelector((state: RootState) => state.data.data);

  return (
    <div>
      {/* <div
        className="update-card-container "
        style={{
          borderBottom: "2px solid #ccc", // Ligne en bas
          paddingBottom: "10px", // Optionnel pour espacer la ligne du contenu
        }}
      >
        <span
          className="mx-2 cursor-pointer "
          onClick={() => {
            setIsOpen(true);
            setNomberHeader("1");
          }}
        >
          <img src={myImage} alt="Description de l'image" />
        </span>
        <Input
          type="textarea"
          name="message"
          id="message"
          value={structureData[1].title}
          placeholder="Votre message"
          rows="4" // Nombre de lignes visibles
          style={{
            width: "70%",
            resize: "vertical", // Permet de redimensionner verticalement
            padding: "10px",
            fontSize: "16px",
            boxSizing: "border-box", // Inclure padding dans largeur
            overflow: "auto", // Permettre le défilement si nécessaire
          }}
          disabled
        />
      </div>
      <div
        className="update-card-container"
        style={{
          borderBottom: "2px solid #ccc", // Ligne en bas
          paddingBottom: "10px", // Optionnel pour espacer la ligne du contenu
        }}
      >
        <span
          className="mx-2 cursor-pointer "
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <img src={myImage} alt="Description de l'image" />
        </span>
        <UpdatecardHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setNomberHeader={setNomberHeader}
        />
      </div> */}
      <div className="update-card-container"style={{
          borderBottom: "2px solid #ccc", // Ligne en bas
          paddingBottom: "10px", // Optionnel pour espacer la ligne du contenu
        }}  >
        <h1>Tree View</h1>
        <AppTest data={structureData1} />
      </div>
       <div className="update-card-container">
       <Button color="primary my-2 mx-2" onClick={(()=>{
        setIsOpen(true)
       })}>Save</Button>{' '}
       <Button color="secondary my-2 mx-2">return to initial state
       </Button>
       </div>
      <ModalUpdate isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
}

import React, { useState } from "react";
import { Button, Input } from "reactstrap"; // Assurez-vous que vous avez importé Input correctement, selon la bibliothèque
import myImage from "../Image/iconUpdate.svg";

import "./Sidebar.css";
import ModalUpdate from "./ModalUpdate";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../features/dataSlice";
import { structureData1 } from "../Constant/data";
import AppTest from "./Arbre";

interface TreeNode {
  [key: string]: any;
}

export default function UpdateCard() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [nomberHeader, setNomberHeader] = React.useState("0");

  //const dataSlice:any = useSelector((state: RootState) => state.data.data);
  //console.log("dataslice",dataSlice);

  const [treeData, setTreeData] = useState<TreeNode>(structureData1.text);

  //const dataSlice = useSelector((state: RootState) => state.data.data);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/getTreeAdmin"
        );

        // Vérifiez si la réponse est OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Obtenez la réponse brute pour la vérifier
        const rawData = await response.text();

        // Essayez de parser les données en JSON
        const data = JSON.parse(rawData);
        console.log("med", data);

        console.log(Object.keys(data.text).length);
        
        if(Object.keys(data.text).length !==0) {
          setTreeData(data.text)
        }
       
        // Parse manuellement en JSON
         dispatch(setData(structuredClone(data.text)))
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchCategories();
  }, []);

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
      <div
        className="update-card-container"
        style={{
          borderBottom: "2px solid #ccc", // Ligne en bas
          paddingBottom: "10px", // Optionnel pour espacer la ligne du contenu
        }}
      >
        <h1>Tree View</h1>
        <AppTest treeData={treeData} setTreeData={setTreeData} />
      </div>
      <div className="update-card-container">
        <Button
          color="primary my-2 mx-2"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Save
        </Button>{" "}
        <Button color="secondary my-2 mx-2">return to initial state</Button>
      </div>
     { isOpen && <ModalUpdate isOpen={isOpen} setIsOpen={setIsOpen} treeData={treeData} />}
    </div>
  );
}

import React from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import myImage from "../Image/logo13.svg";
import errorToast from "../Constant/ErrorToast";
import { setData } from "../features/dataSlice";
import { useDispatch } from "react-redux";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  treeData: any; // Remplacez `any` par un type spécifique si possible
};

const ModalUpdate: React.FC<ModalProps> = ({ isOpen, setIsOpen, treeData }) => {
  // Fonction pour basculer l'ouverture/fermeture du modal
  const toggle = () => setIsOpen(!isOpen);

  // Soumission des données au backend


  const dispatch =useDispatch()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backandstedy-29.onrender.com/api/v1/postTree",
        treeData
      );

      if (response.data.error) {
        errorToast(response.data.message, "error");
        console.error(`Erreur: ${response.data.message}`);
      } else {
       // errorToast("Les modifications ont été enregistrées avec succès.", "success");
         dispatch(setData(structuredClone(treeData)))
      }
    } catch (error) {
      console.error("An error occurred:", error);
      errorToast("Une erreur est survenue, veuillez réessayer.", "error");
    } finally {
      toggle(); // Fermer le modal après traitement
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>
        <img src={myImage} alt="Logo" style={{ width: "30px", marginRight: "10px" }} />
        Confirmation
      </ModalHeader>
      <ModalBody>
        <p>Are you sure you want to confirm the changes?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
        <Button color="primary" onClick={handleSubmit}>
          Save changes
        </Button>
      </ModalFooter>
    
    </Modal>
  );
};

export default ModalUpdate;

import React, { useState } from "react";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";

import { RootState } from "../features/store";
import { setData } from "../features/dataSlice";
import { generateUUID, structureData } from "../Constant/data";
import myImage from "../Image/logo13.svg";

import "react-toastify/dist/ReactToastify.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
 
};
type DataUserType = {
  [key: string]: string; // Allow dynamic string-based access
};

const ModalUpdate: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {


  
  const dispatch = useDispatch();
  const dataSlice = useSelector((state: RootState) => state.data.data);


  const [DataUser, setDataUser] = useState("")
  


  const newUUID = generateUUID();

  return (
    <>
      {isOpen && (
        <>
          <div
            className="modal fade show"
            tabIndex={-1}
            style={{ display: "block" }}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img src={myImage} alt="Description de l'image" />
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      setIsOpen(false);
                      setDataUser("");
                    }}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body row">
                 
                    <div
                     
                      className="my-2"
                      style={{ width: "300px" }}
                    >
                    Are you sure to confirm ?
                    </div>
                  
                  
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIsOpen(false);
                      setDataUser("");
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(
                        setData({
                          ...structureData,
                          1: {
                            ...structureData[1],
                            title: DataUser, // Modifiez uniquement cette propriété
                          },
                        })
                      );
                      
                      setIsOpen(false);
                      setDataUser("")
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
         

          <div className="modal-backdrop fade show "></div>
        </>
      )}
    </>
  );
};

export default ModalUpdate;

import React from "react";
import myImage from "../../Image/rpo999.svg"; // Assuming the image is correctly located in the 'Image' folder
import "./RPOSection.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";


const Header1 = () => {
  const dataSlice: any = useSelector((state: RootState) => state.data.data);
 

  return (
    <div className="rpo-container">
      {/* Text Section */}
      <div className="rpo-text">
        <h2> {dataSlice[4].title}</h2>
        <h3>{dataSlice[4].subTitle}</h3>
        <p>{dataSlice[4].content}</p>
        <p>{dataSlice[4].MetaContent}</p>
        <p>
          <em>{dataSlice[4].subContent}</em>
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

export default Header1;

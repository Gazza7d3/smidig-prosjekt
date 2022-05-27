import React from 'react';
import SmallCharity from "../css/SmallCharity.css"
import buildingicon from "../images/building-icon.png"


function SmallCharityCard({image, title, moneyraised, description, moneygoal}) {
  
  return (
    <>
    <div className="education-card">
      <img className="image" src={image} alt="image" />
      <h1 className="card-title">{title}</h1>
      
      <p className="card-description">{description}
        <p className="moneyraised">${moneyraised} USD raised of {moneygoal} goal</p>
      </p>
        <div className="greybar"></div>
        <div className="colorbar"></div>
        </div>
    </>
  );
}

export default SmallCharityCard;
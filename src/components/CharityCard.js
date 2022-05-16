import Charity from "../css/Charity.css"
import buildingicon from "../images/building-icon.png"


function CharityCard({image, title, daysleft, completeness, description}) {
  
  return (
    <div className="education-card">
      <img className="image" src={image} alt="image" />
      <p className="daysleft">{daysleft} Days Left</p>
      <div className="stats">
        <img src={buildingicon} classname="buildingicon" />
        <p>{completeness}/10</p>
        <p>∙</p>
        <p>{completeness}0% complete</p>
      </div>
      <h1 className="card-title">{title}</h1>

      <p className="card-description">{description}
        <p className="readmore">Read more</p>
      </p>
      <>
      <button className="button">Make a donation</button>
      </>
      <>
        <div className="greybar"></div>
        <div className="colorbar"></div>
      </>
    </div>
  );
}

export default CharityCard;
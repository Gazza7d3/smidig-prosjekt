import Charity from "../css/Charity.css"
import icon from "../images/icon.jpeg"
import buildingicon from "../images/building-icon.png"


function CharityCard({name, title}) {
  
  return (
    <div className="education-card">
      <img className="image" src={icon} alt="image" />
      <p className="daysleft">{name} 12 Days Left</p>
      <div className="stats">
        <img src={buildingicon} classname="buildingicon" />
        <p>8/10</p>
        <p>∙</p>
        <p>80% complete</p>
      </div>
      <h1 className="card-title">{title}Education 4 all</h1>

      <p className="card-description">Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...
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
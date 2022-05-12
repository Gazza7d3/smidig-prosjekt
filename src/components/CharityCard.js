import Charity from "../css/Charity.css"
import icon from "../images/icon.jpeg"

function CharityCard() {
  return (
    <div className="education-card">
      <img className="image" src={icon} alt="image" />
      <p className="daysleft">12 Days Left</p>
      <h1 className="card-title">Education 4 all</h1>
      <p className="card-description">Our donation goal of building 10 more schools in Africa has been achieved. Meloria Impact are grateful for all...</p>
      <button className="button">Read More</button>
    </div>
  );
}

export default CharityCard;
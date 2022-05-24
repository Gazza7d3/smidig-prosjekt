import Charity from "../css/Charity.css"
import buildingicon from "../images/building-icon.png"
import { ActionButton, DonationButton } from "./ButtonComponents";



function CharityCard({image, title, daysleft, completeness, description}) {
  
  return (
    <div style={CharityCardStyles.educationcard}>
      <img style={CharityCardStyles.image} src={image} alt="image" />
      <p style={CharityCardStyles.daysleft}>{daysleft} Days Left</p>
      <div style={CharityCardStyles.stats}>
        <img src={buildingicon} />
        <p>{completeness}/10</p>
        <p>∙</p>
        <p>{completeness}0% complete</p>
      </div>
      
      <div>
        <h1 style={CharityCardStyles.cardtitle}>{title}</h1>
        <p style={CharityCardStyles.carddescription}>{description}
          <p style={CharityCardStyles.readmore}>Read more</p>
        </p>
      </div>

      <div style={CharityCardStyles.barsNbutton}>
        <div style={CharityCardStyles.greybar}></div>
        <div style={CharityCardStyles.colorbar}></div>
        <DonationButton text="Make a donation" />
      </div>


    </div>
  );
}

export default CharityCard;

export const CharityCardStyles = {
  educationcard:{
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    padding: "0px",
    margin: 30,
    

    width: "312px",
    height: "674px",
    
    background: "#FFFFFF",
    boxShadow: "0px 24px 64px rgba(0, 0, 0, 0.06)",
    borderRadius: "10px",
    flex: 1

  },
  image: {
    width: "312px",
    height: "300px",
    
    background: "#FFFFFF",
    borderRadius: "10px 10px 0px 0px",
    
    /* Inside auto layout */
    
    flex: "none",
    order: 0,
    flexGrow: 0
  },
  daysleft: {
    position: "absolute",
    width: "115px",
    height: "20px",
    paddingTop: "250px",
    paddingRight: "150px",


    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "100%",
    color: "white"
  },
  stats: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    padding: "10px 10px 0px 10px",
    gap: "10px",

    width: "205px",
    height: "24px",


  },
  buildingicon: {
    position: "absolute",
    width: "264px",
    height: "12px",
    right: "300px",
    padding: "0px",
    backgroundColor: "#03A8F7",
    top: "532px"
  },
  cardtitle: {
    width: "198px",
    height: "34px",
    
    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "120%",
    
    flex: "none",
    order: 0,
    flexGrow: 0
  },
  carddescription: {
    display: "flex",
    flexDirection: "column",
    alignItems:"flex-start",
    margin: "0px",
    padding: "0px",
    gap: "16px",

    width: "264px",
    height: "155px",

    flex: "none",
    order: 1,
    flexGrow: 0
  },
  readmore: {

    top: "540px",
    width: "264px",
    height: "22px",
    margin: 0,
    padding: 0,

    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "135%",

    color: "#03A8F7",
    
  },
  button: {
    alignItems:"center",
    padding: "16px 24px",
    gap: "8px",

    width: "264px",
    height: "50px",

    border: "1px solid #CDD1D4",
    borderRadius: "28px",

    flex: "none",
    order: 3,
    flexGrow: 0,

    fontFamily: 'Euclid Circular B',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "100%",
  },
  greybar: {

    width:" 264px",
    height: "12px",
    
    top: "592px",
    
    background: "#ECECEC",
    borderRadius: "10px",


    backgroundColor: "#ECECEC",
    gridRowStart: "1",
    gridColumnStart: 1,

    marginBottom: 22
  },
  colorbar: {
    /* width: 85% */
    width: "204px",
    height: "12px",
    top: "892px",


    
    background: "linear-gradient(270deg, #EDCBB1 -21.94%, #709E9B 82.37%)",
    borderRadius: "10px",



    gridRowStart: "1",
    gridColumnStart: 1
  },
  barsNbutton: {
    display: "grid",
    gridTemplateColumns: "1fr"
  },
  barsOverlap: {
    padding: "50px",
    backgroundColor: "rgba(0,0,0,0.5)",
    gridRowStart: "1",
    gridColumnStart: 1
  }
}
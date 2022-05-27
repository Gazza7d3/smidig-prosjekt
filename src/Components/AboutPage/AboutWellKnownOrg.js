import React from 'react';
import logo from "./Images/Logo5.png";

const AboutWellKnownOrg = () => {
  return (
    <div style={{background: "#EDCBB120"}}>
      <div style={{display: "flex", flex: 2, justifyContent: "center", flexDirection: "column", padding: "0px 40px"}}>
        <h5 style={{display: "flex", justifyContent: "center", color: "#709E9B"}}>Our Partners</h5>
        <h1 style={{display: "flex", justifyContent: "center"}}>Well-known Organisations</h1>
        <p style={{display: "flex", justifyContent: "center", color: "#8B8B8B"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <br/>
        
        <div style={{display: "flex", flex: 4, justifyContent: "space-between", padding: "0em 5em 2em 5em"}}>
          <img src={logo} alt="Failed to find Give image" />
          <img src={logo} alt="Failed to find Give image" />
          <img src={logo} alt="Failed to find Give image" />
          <img src={logo} alt="Failed to find Give image" />
        </div>
      </div>

    </div>
  )
}

export default AboutWellKnownOrg;
import React from 'react';
import give from "./Images/Give.png";

const About3Frame = () => {
  return (
    <div style={{display: "flex", flex: 1, justifyContent: "space-between", padding: "0px 45px" }}>

        <div style= {{display: "flex", flex: 1, justifyContent: "left", flexDirection: "column" }}>
            <h5 style={{color: "#709E9B"}}>Our Mission</h5>
            <h1>Make it easier for companies and enterprises to donate</h1>
            <p style={{color: "#8B8B8B"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.

Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
            </div>
            <img src={give} alt="Failed to find Give image" />
    </div>
  )
}

export default About3Frame
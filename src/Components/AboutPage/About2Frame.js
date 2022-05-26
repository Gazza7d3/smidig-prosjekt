import React from 'react';
import grow from "./Images/Grow.png";




const About2Frame = () => {
  return (
    <div style={{display: "flex", flex: 1, justifyContent: "space-between", padding: "0px 45px"  }}>
        <img src={grow} alt="Failed to find Grow image" />
        <div style= {{display: "flex", flex: 2, justifyContent: "right", flexDirection: "column"}}>
            <h5 style={{color: "#709E9B"}}>Our Mission</h5>
            <h1 >Be the chance to make a difference</h1>
            <p style={{color: "#8B8B8B"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.

Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
        </div>
    </div>
  )
}

export default About2Frame;
import React from 'react';
import About1Frame from './About1Frame';
import About2Frame from './About2Frame';
import About3Frame from './About3Frame';
import AboutCardContainer from './AboutCardContainer';
import AboutWellKnownOrg from './AboutWellKnownOrg';



const About = () => {
    return (
        <div style={{display: "flex", flex: 1, justifyContent: "center" }}>
        
        <div>
            <About1Frame/>
            <br/>
            <About2Frame/>
            <About3Frame/>
            <br/>
            <AboutWellKnownOrg/>
            <br/>
            <AboutCardContainer/>
            

        </div>   
        </div>
    );
}

export default About;


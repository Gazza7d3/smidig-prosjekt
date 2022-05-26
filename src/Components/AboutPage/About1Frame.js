import React from 'react';
import VideoJS from './Videos/VideoJs.jsx';
import video from './Videos/TestVideo.mp4';


const About1Frame = () => {
    const videoJsOptions = {
        controls: true, source:[{
            src: video, type: 'video/mp4'
        }]
    }
    return (
        <div style={{padding: "0px 40px"}}>
            <h5 style={{color: "#709E9B"}}>About</h5>
            <h1>The leading platform to give enterprises and companies the chance to give</h1>
            <p style={{color: "#8B8B8B"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
            
            <div>
                <VideoJS options={videoJsOptions}/>
            </div>
        </div>
        

    );
}

export default About1Frame;

import About from "../css/About.css"


const AboutUs = ({text, image}) => {
    return (
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h3>About Us</h3>
                    </div>
                    <div className="content">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="image-section">
                    <img src={image} alt="Organization"></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
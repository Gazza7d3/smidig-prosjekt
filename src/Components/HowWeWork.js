import Work from "../css/Work.css"


const HowWeWork = ({text}) => {
    return (
        <div className="work-section">
            <div className="work-container">
                <div className="work-content-section">
                    <div className="work-title">
                        <h3>How We Work</h3>
                    </div>
                    <div className="work-content">
                        <p>{text}</p>
                    </div>
                </div>
                <div className="work-image-section">
                    <img src="" alt="Organization"></img>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork
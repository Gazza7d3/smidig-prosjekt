import { BadgeCardStyles } from './ComponentStyles'
import { BadgeShape } from './SvgShapes'

export const BadgeCard = ({data}) => {

    let {color, backgroundColor, badgetitle, text, badgegiver, badgedate } = data

    const BadgeCardStyles = {
        badgeWrapper: {
            display: "flex",
            flex: 1,
            padding: 20,
            justifyContent: "center"
        },
        badgeInfoCard: {
            width: "296px",
            height: "277px",
            borderRadius: "15px",
            overflow: "hidden",
            background: backgroundColor,
            zIndex: 10
        }, 
        badgeDescription: {
            textAlign: "center",
            padding: "0 20px 0 20px",
            top: "35px"
        },
        badgeDateWrapper: {
            textAlign: "center",
            display: "flex",
            padding: "20px",
            justifyContent: "space-between",
            top: "200px"
        },
        badgeDateInfo: {
            fontFamily: "sans-serif", 
            fontSize: "12px", 
            lineHeight: "18px", 
            letterSpacing: "0.1em",
            margin: "0",
        }
    }

    return (
        <div>
            <div style={{zIndex: 100, marginTop: 30}}>
                <BadgeShape color={color}></BadgeShape>
            </div>
            <div style={BadgeCardStyles.badgeWrapper}>
                <div style={BadgeCardStyles.badgeInfoCard}>
                        <div style={BadgeCardStyles.badgeDescription}>
                            <h6 style={{color: "#709E9B"}}>Congratulations</h6>
                            <h3 style={{ fontFamily: "sans-serif", fontWeight: "600", fontSize: "18px"}}>{badgetitle}</h3>
                            <p style={{fontFamily: "sans-serif", fontSize: "14px", 
                            lineHeight: "21px", letterSpacing: "0.1em", color: "#8B8B8B"}}>
                            {text}
                            </p>
                        </div>
                    
                    <div style={BadgeCardStyles.badgeDateWrapper}>
                        <div>
                            <p style={BadgeCardStyles.badgeDateInfo}>Issued on:</p>
                            <p style={BadgeCardStyles.badgeDateInfo}>{badgedate}</p>
                        </div>
                        <div>
                            <p style={BadgeCardStyles.badgeDateInfo}>Issued by:</p>
                            <p style={BadgeCardStyles.badgeDateInfo}>{badgegiver}</p>
                        </div>
                    </div>
                    <div style={{position: "relative", top: -200, left: -30}}>
                        <svg width="326" height="332"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M203.492 209.385L131.405 243.381L95.1776 172.389C54.0055 160.231 10.5959 181.349 -2.97375 221.077L-4.77802 226.359C-9.75858 240.941 -1.59423 256.94 13.4494 262.078L213.274 330.331C228.318 335.47 244.564 327.808 249.544 313.226L251.349 307.944C264.918 268.216 243.498 224.955 203.492 209.385ZM75.1513 17.5896L78.5026 19.656L67.5265 51.7906C62.7634 52.7444 58.5529 55.7917 56.899 60.6339C55.3203 65.2561 56.616 69.9997 59.4978 73.6262L38.9329 104.882C36.671 108.349 37.4938 112.993 40.616 114.059L64.3452 122.164C67.4675 123.231 70.9591 120.061 71.2908 115.934L74.144 78.6288C78.6421 77.5231 82.5691 74.5633 84.1478 69.9412C85.8018 65.0989 84.3354 60.1126 81.1509 56.4442L91.0369 27.501L125.516 49.0474C117.401 56.8442 110.727 66.362 106.855 77.6972C93.5674 116.6 115.326 159.24 155.462 172.949C195.597 186.657 238.894 166.238 252.182 127.336C256.054 116 256.654 104.408 254.948 93.2567L313.976 99.1634C325.135 100.271 329.401 87.7806 319.896 81.8305L220.455 19.6003C213.657 15.3739 205.88 12.7174 197.918 11.9025L81.0904 0.201671C69.9884 -0.886817 65.7032 11.6589 75.1513 17.5896Z" fill="white" fill-opacity="0.4"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
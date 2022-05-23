import { BadgeCardStyles } from './ComponentStyles'

export const BadgeCard = ({icon, badgetitle, text, badgegiver, badgedate}) => {
    return (
    <div style={BadgeCardStyles.badgeWrapper}>
        <div style={BadgeCardStyles.badgeImg}>
            <img alt="Badge" src={icon}/>
        </div>
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
        </div>
    </div>
    )
}
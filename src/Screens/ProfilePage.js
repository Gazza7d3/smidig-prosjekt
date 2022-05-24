import ProfileHeaderComponent from "../Components/ProfileHeaderComponent"
import { BadgeCard } from "../Components/BadgeCard"
const ProfilePage = ({data}) => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <ProfileHeaderComponent></ProfileHeaderComponent>
            <div style={{display: "flex", flexDirection: "row"}}>
                {data.badges.map((badge, index) => {
            return <BadgeCard data={badge}></BadgeCard>
            })}
            </div>
        </div>
        
    )
}



export default ProfilePage
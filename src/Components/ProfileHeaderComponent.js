import React from 'react'
import { ActivityButtons, ActionButton } from './ButtonComponents'
import { ProfileHeaderComponentStyles } from './ComponentStyles'

const ProfileHeaderComponent = () => {
    return (
        <div style={{width: 1200}}>
            <div style={ProfileHeaderComponentStyles.headerImageStyle}></div>
            <div style={ProfileHeaderComponentStyles.profileContent}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flex: 1, flexDirection: "column"}}>
                        <img style={{height: 100}} src='../../assets/images/company-logo/volkswagen-logo.png' alt=""/>
                        <p style={{fontSize: 25, alignSelf: "center"}}>Volkswagen</p>
                    </div>
                    <div style={{display: "flex", flex: 1}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", flexDirection: "row", alignSelf: "flex-end", border: "solid #000000 1px", borderRadius: 25, width: 240, paddingLeft: 10, paddingRight: 10, height: 30, marginBottom: 20, marginLeft: 50}}>
                            <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4062 0.0625H1.59375C0.713867 0.0625 0 0.776367 0 1.65625V13.3438C0 14.2236 0.713867 14.9375 1.59375 14.9375H15.4062C16.2861 14.9375 17 14.2236 17 13.3438V1.65625C17 0.776367 16.2861 0.0625 15.4062 0.0625ZM15.4062 13.1445C15.4062 13.2541 15.3166 13.3438 15.207 13.3438H1.79297C1.6834 13.3438 1.59375 13.2541 1.59375 13.1445V5.375H15.4062V13.1445Z" fill="#393939" fill-opacity="0.5"/>
                            </svg>
                            <div style={{height: 30, width: 1, backgroundColor: "black"}}></div>
                            <p style={{color: "#709E9B", fontWeight: "bold"}}>www.volkswagen.com/</p>
                        </div>
                    </div>
                </div>
            </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <p style={{textAlign: "center", fontWeight: "bold"}}>World famous car manufacturer from Germany.<br/>Welcome to our official page for donations.</p>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97769 5.63321L8.8027 1.91446C9.06707 1.65742 9.06707 1.2418 8.8027 0.987501L8.16707 0.369531C7.9027 0.1125 7.4752 0.1125 7.21363 0.369531L4.50238 3.00547L1.79113 0.369531C1.52676 0.1125 1.09926 0.1125 0.837694 0.369531L0.20207 0.987501C-0.0623045 1.24453 -0.0623045 1.66016 0.20207 1.91446L4.02707 5.63321C4.28582 5.89024 4.71332 5.89024 4.97769 5.63321Z" fill="#414141" fill-opacity="0.7"/>
                    </svg>
                </div>
                <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                    <div style={{display: "flex", border: "solid black 1px", justifyContent: "center", width: 250, alignItems: "center", height: 50, borderRadius: 20}}>
                        <div style={ProfileHeaderComponentStyles.statsAndDonationBar.numbersAndDescription}>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.statTextStyle}>17</p>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.descriptionTextStyle}>Donations</p>
                        </div>
                        <div style={ProfileHeaderComponentStyles.statsAndDonationBar.statsAndDonationBarDivider}></div>
                        <div style={ProfileHeaderComponentStyles.statsAndDonationBar.numbersAndDescription}>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.statTextStyle}>4</p>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.descriptionTextStyle}>Badges</p>
                        </div>
                        <div style={ProfileHeaderComponentStyles.statsAndDonationBar.statsAndDonationBarDivider}></div>
                        <div style={ProfileHeaderComponentStyles.statsAndDonationBar.numbersAndDescription}>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.statTextStyle}>$3,4m</p>
                            <p style={ProfileHeaderComponentStyles.statsAndDonationBar.descriptionTextStyle}>Total donations</p>
                        </div>
                    </div>
                <ActivityButtons text={"Water projects"} icon={<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" d="M1 5L8 1L19 5M1 5V10L12 14L19 10V5M1 5L12 9L19 5" stroke="#4A4642" stroke-width="2" stroke-linejoin="round"/>
</svg>
} color={"#709E9B"}></ActivityButtons>
                <ActivityButtons text={"Education"} icon={"water.svg"} color={"#EDCBB1"}></ActivityButtons>
                <ActivityButtons text={"Other"} icon={"water.svg"} color={"#E2E2E8"}></ActivityButtons>
                </div>
        </div>
    )
}



export default ProfileHeaderComponent
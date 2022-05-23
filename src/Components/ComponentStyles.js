export const ProfileHeaderComponentStyles = {
    headerImageStyle: {
        display: "flex", 
        flex: 1, 
        height: 150,
    },
    profileContent: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
    },
    statsAndDonationBar: {
        numbersAndDescription: {
            display: "flex", 
            justifyContent: "center", 
            flexDirection: "column", 
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10
        },
        statTextStyle: {
            fontSize: 18,
            fontWeight: "bold"
        },
        descriptionTextStyle: {
            fontSize: 10
        },
        statsAndDonationBarDivider: {
            height: "100%", 
            width: 1, 
            background: "black"
        }
    }
}

export const BadgeCardStyles = {
    badgeWrapper: {
        width: "296px",
        height: "355px",
        borderRadius: "10px",
        background: "none",
        display: "flex",
        flex: 1,
        justifyContent: "center"
    },
    badgeImg: {
        position: "absolute",
        background: "rgba(255, 184, 0, 0.5)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(60px)",
        top: "40px",
        padding: "30px", 
        borderRadius: "100%"
    },
    badgeInfoCard: {
        width: "296px",
        height: "277px",
        borderRadius: "15px",
        position: "absolute",
        top: "76px",
        background: "rgba(255, 184, 0, 0.15)",
    }, 
    badgeDescription: {
        textAlign: "center",
        position: "absolute",
        padding: "0 20px 0 20px",
        top: "35px"
    },
    badgeDateWrapper: {
        position: "relative",
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
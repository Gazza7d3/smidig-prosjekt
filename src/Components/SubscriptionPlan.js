
export const SubscriptionPlan = ({price, duration, firstdot, seconddot, thirddot, fourthdot, fifthdot}) => {
    return (
        <div style={SubscriptionPlanStyles.subscriptiondiv}>
            <div style={SubscriptionPlanStyles.planHeader}>
                <h1 style={SubscriptionPlanStyles.price}>${price}</h1>
                <h3 style={SubscriptionPlanStyles.duration}>/ {duration}</h3>
            </div>
            <div style={SubscriptionPlanStyles.planContent}>
                <ul style={SubscriptionPlanStyles.list}>
                    <li style={SubscriptionPlanStyles.listMember}>{firstdot}</li>
                    <li style={SubscriptionPlanStyles.listMember}>{seconddot}</li>
                    <li style={SubscriptionPlanStyles.listMember}>{thirddot}</li>
                    <li style={SubscriptionPlanStyles.listMember}>{fourthdot}</li>
                    <li style={SubscriptionPlanStyles.listMember}>{fifthdot}</li>
                </ul>
                <button>Choose Plan</button>
            </div>

        </div>
    )
}

export const SubscriptionPlanStyles = {
    subscriptiondiv:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        gap: 1,

        width: 304,
        height: 409,

        border: "2px solid #CDD1D4",
        borderRadius: 10,
    },
    planHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px 40px",
        gap: 10,

        width: "224px",
        height: "84px",

        background: "#FFFFFF",
        /* Drop/Bottom Dark */

        boxShadow: "0px 1px 0px #CDD1D4",
        borderRadius: "10px 10px 0px 0px",

        flex: "none",
        order: 0,
        flexGrow: 0
    },
    text: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: "0px",
        gap: "12px",

        width: "224px",
        height: "36px"  
    },
    price: {
        width: "109px",
        height: "36px",
        
        fontFamily: 'Euclid Circliar B',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 36,
        lineHeight: "100%",
        
        
        color: "#001826"
    },
    duration: {
        padding: "0px 0px 3px",
        gap: "10px",
        
        width: "82px",
        height: "21px",


        fontFamily: 'Euclid Circliar B',
        fontStyle: "thin",
        fontWeight: 200,
        fontSize: 16,
        lineHeight: "100%",
    },

    planContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        
        padding: "25px 32px",
        gap: "24px",

        width: "240px",
        height: "324px",

        background: "#FFFFFF",
        borderRadius: "0px 0px 10px 10px"
    },
    list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding:" 20px ",
        gap: "16px",
        //listStyle: "none",

        width: "240px",
        height: "208px"
    }
}
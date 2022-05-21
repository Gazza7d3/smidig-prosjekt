
export const SubscriptionPlan = ({price, time, firstdot, seconddot, thirddot, fourthdot, fifthdot}) => {
    return (
        <div style={SubscriptionPlanStyles.subscriptiondiv}>
            <div style={SubscriptionPlanStyles.planHeader}>
                <h1>{price}</h1>
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
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px 40px",
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
    }
}
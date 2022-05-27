import React from 'react';
export const ActivityButtons = ({text, color, icon}) => {
    return (
        <button style={{background: color, border: "none", borderRadius: 15, width: 120}}>{icon}{text}</button>
    )
}


export const ReadMoreButton = () => {
    return (
        <button></button>
    )
}
import React from 'react';

function Header() {

const date = new Date()
const hours = date.getHours()
let timeOfDay

if (hours < 12 && hours > 5) {
    timeOfDay = "morgen"
}   else if (hours >= 12 && hours < 17) {
    timeOfDay = "dag"
}   else if (hours >= 17 && hours < 24) {
    timeOfDay = "kveld"
}   else {
    timeOfDay = "natt"
}

// Styling the header
const headerStyle = {
    height: "100px",
    display: "block",
    background: "linear-gradient(90deg, rgba(0, 0, 0) 30%, rgb(210, 75, 223,0.7) 100%)"
}
const textStyle = {
    color: "azure",
    textAlignment: "center",
    paddingTop: "30px",
    fontSize: "50px" 
}

    return(
        <div style={headerStyle}>
            <header style={headerStyle}>
    <h1 style={textStyle}> God {timeOfDay}! Planlegg din middag for uken</h1>
            </header>
        </div>
    )
}

export default Header; // Don’t forget to use export default!
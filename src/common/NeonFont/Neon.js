import React from "react";
import './Neon.css'

function Neon(props) {

    return (
        <div className="App">
            <div id="neon">{props.title}</div>
        </div>
    );
}

export default Neon;
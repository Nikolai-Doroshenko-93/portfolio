import React from "react";
import './Neon.css'

function Neon(props) {

    return (
        <div className='titleContainer'>
            <div id="neon">{props.title}</div>
        </div>
    );
}

export default Neon;
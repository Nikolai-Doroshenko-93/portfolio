import React from "react";
import  './ButtonAcid.sass'



export const ButtonAcid = (props) => {
    return <div className={"wrapper"}>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="gooey">

                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                   result="highContrastGraphic"/>
                    <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop"/>
                </filter>
            </defs>
        </svg>

        <button id="gooey-button" >
            Hire me
            <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
        </button>
    </div>
}
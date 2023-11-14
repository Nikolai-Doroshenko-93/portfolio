import React from "react";
import './viewButton.scss'

function ViewButton(props) {

    return (
        <div>
            <div className='container'>
                <a className='btn'
                   href={props.href}
                   target={"_blank"}>
                    <span className='btnInner'>Button</span>
                </a>
            </div>
        </div>
    );
}

export default ViewButton;
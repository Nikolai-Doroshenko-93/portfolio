import React from "react";
import './viewButton.scss'

function ViewButton() {

    return (
        <div>
            <div className='container'>
                <a className='btn' href="#">
                    <span className='btnInner'>Button</span>
                </a>
            </div>
        </div>
    );
}

export default ViewButton;
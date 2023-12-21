import React from 'react'
import './ProjectCard.css'
import ViewButton from "../../common/viewButton/viewButton";

export const ProjectCard = (props) => {
    return (<div className="cardBlock">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                            <h3>{props.title}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>{props.info}</p>
                        <ViewButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import './ProjectCard.css'
import ViewButton from "../../../common/viewButton/viewButton";

export const ProjectCard = (props) => {
    return (<div className="cardBlock">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <h3 className={"title"}>{props.title}</h3>
                        <p className={"info"}>{props.info}</p>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">

                        <ViewButton
                        href={props.href}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
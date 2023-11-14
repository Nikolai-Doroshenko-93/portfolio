import React from "react";
import s from './ProjectsItem.module.css';
import ViewButton from "../../../common/viewButton/viewButton";

const ProjectsItem = (props) => {
    return (
        <div className={s.projectsItemBlock}>
            <div className={s.imageBlock}>
                <ViewButton
                href={props.href}
                />
            </div>
        </div>
    );
}

export default ProjectsItem;

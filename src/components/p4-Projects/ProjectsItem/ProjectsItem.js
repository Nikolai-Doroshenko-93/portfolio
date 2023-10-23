import React from "react";
import s from './ProjectsItem.module.css';
import ViewButton from "../../../common/viewButton/viewButton";

const ProjectsItem = () => {
    return (
        <div className={s.projectsItemBlock}>
            <div className={s.imageBlock}>
                <ViewButton/>
            </div>
        </div>
    );
}

export default ProjectsItem;
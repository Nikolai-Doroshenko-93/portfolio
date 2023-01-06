import React from "react";
import s from './ProjectsItem.module.css';

const ProjectsItem = () => {
    return (
        <div className={s.projectsItemBlock}>
            <div className={s.imageBlock}>
                <div className={s.viewButton}>
                    <p>View</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;
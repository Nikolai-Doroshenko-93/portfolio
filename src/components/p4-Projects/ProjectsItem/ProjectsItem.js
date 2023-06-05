import React from "react";
import s from './ProjectsItem.module.css';

const ProjectsItem = () => {
    return (
        <div className={s.projectsItemBlock}>
            <div className={s.imageBlock}>
                <div className={s.viewButton}>
                    <p className={s.buttonText}>View</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectsItem;
import React from "react";
import s from './Projects.module.css';
import c from '../../common/styles/Content.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={c.content}>
                <h3 className={s.title}>My Projects</h3>
                <div className={s.contentBlock}>
                    <ProjectsItem/>
                    <ProjectsItem/>
                    <ProjectsItem/>
                    <ProjectsItem/>
                    <ProjectsItem/>
                    <ProjectsItem/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
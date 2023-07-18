import React from "react";
import s from './Projects.module.css';
import c from '../../common/styles/Content.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import {Zoom} from "react-reveal"

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={c.content}>
                <h3 className={s.title}>My Projects</h3>
                <div className={s.contentBlock}>
                    <Zoom>
                        <ProjectsItem/>
                        <ProjectsItem/>
                        <ProjectsItem/>
                        <ProjectsItem/>
                        <ProjectsItem/>
                        <ProjectsItem/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Projects;
import React from "react";
import s from './Projects.module.css';
import c from '../../common/styles/Content.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import {Zoom} from "react-reveal"
import Neon from "../../common/NeonFont/Neon";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={c.content}>
                <Neon
                    title={'My Project'}
                />
                <div className={s.contentBlock}>
                    <Zoom>
                        <ProjectsItem
                        href={'https://nikolai-doroshenko-93.github.io/to-do-list-incubator/'}
                        />
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
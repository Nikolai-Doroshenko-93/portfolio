import React from "react";
import s from './Projects.module.css';
import c from '../../common/styles/Content.module.css'
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import {Zoom} from "react-reveal"
import Neon from "../../common/NeonFont/Neon";
import {ProjectCard} from "../../newComponents/newCards/ProjectCard";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={c.content}>
                <Neon
                    title={'My Project'}
                />
                <div className={s.contentBlock}>
                    <Zoom>
                        <ProjectCard
                            title={"Save life"}
                        />
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Projects;
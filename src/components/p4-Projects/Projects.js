import React from "react";
import s from './Projects.module.css';
import c from '../../common/styles/Content.module.css'
import {Zoom} from "react-reveal"
import Neon from "../../common/NeonFont/Neon";
import {ProjectCard} from "./ProjectsItem/ProjectCard";

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
                            title={"To-do list (React)"}
                            href={"https://nikolai-doroshenko-93.github.io/to-do-list-incubator/"}
                            info={"React, Redux Toolkit, Material UI, Typescript"}
                        />
                        <ProjectCard
                            title={"To-do list (VanillaJS)"}
                            href={"https://my-to-do-list-project.netlify.app/"}
                            info={"VanillaJS"}
                        />
                        <ProjectCard
                            title={"Social network"}
                            href={"https://nikolai-doroshenko-93.github.io/samurai-way-incubator/"}
                            info={"React, learning class components, the backend gives few opportunities"}
                        />
                        <ProjectCard
                            title={"First order"}
                            href={"http://superlative-ganache-09a2f6.netlify.app/"}
                            info={"A small business card website for advertising geodetic services"}
                        />
                        <ProjectCard
                            title={"Save life"}
                            href={"https://courageous-elf-0910d4.netlify.app"}
                            info={"Adaptive layout, Webpack, SCSS"}
                        />
                        <ProjectCard
                            title={"Micro tasks"}
                            href={"https://nikolai-doroshenko-93.github.io/home-work-autocheck/"}
                            info={"React, Homework from educational courses, small elements often found in projects"}
                        />
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Projects;
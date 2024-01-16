import React from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

import {Zoom} from "react-reveal";
import Neon from "../../common/NeonFont/Neon";

const Skills = () => {
    const state = [
        {
                name: 'logo-js',
                size: '100',
                title: 'JavaScript',
        },
        {
            name: 'logo-ts',
            size: '100',
            title: 'TypeScript',
        },
        {
            name: 'logo-react',
            size: '100',
            title: 'React',
        },
        {
            name: 'logo-react-native',
            size: '100',
            title: 'React Native',
        },
        {
            name: 'logo-styled-components',
            size: '100',
            title: 'Styled Component',
        },
        {
            name: 'logo-redux',
            size: '100',
            title: 'Redux',
        },
        {
            name: 'logo-git',
            size: '100',
            title: 'Git',
        },
        {
            name: 'logo-figma',
            size: '100',
            title: 'Git',
        },
        {
            name: 'logo-html',
            size: '100',
            title: 'HTML',
        },
        {
            name: 'logo-css',
            size: '100',
            title: 'CSS',
        },
        {
            name: 'logo-sass',
            size: '100',
            title: 'Sass',
        },{
            name: 'logo-github',
            size: '100',
            title: 'Github',
        }
    ]
    return (
        <div className={s.skillsSection}>
            <a name={"skills"}></a>
            <div className={s.skillsBlock}>
              <div className={c.content}>
                      <Neon
                      title={'My Skills'}
                      />
                  <div className={s.contentBlock}>
                      <Zoom>
                          {state.map((s) => {
                              return (
                              <SkillsItem
                                  name={s.name}
                                  size={s.size}
                                  title={s.title}
                                  data-aos="zoom-in"
                              />
                              )
                          })}
                      </Zoom>
                  </div>
                  {/*<div className={s.additionalContent}>*/}
                  {/*    <p className={s.andAlso}>and also</p>*/}
                  {/*    <div className={s.additionalSkills}>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>React Redux</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>Figma</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>Material UI</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>StoryBook</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>Swagger</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>Redux toolkit</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>React Router Dom</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>Webpack</p></div>*/}
                  {/*        <div className={s.additionalSkillBlock}><p>SCSS</p></div>*/}
                  {/*    </div>*/}
                  {/*</div>*/}
              </div>
            </div>
        </div>

    );
}

export default Skills;
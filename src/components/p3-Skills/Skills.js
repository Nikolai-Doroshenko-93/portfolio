import React from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

import {Zoom} from "react-reveal";
import Neon from "../../common/NeonFont/Neon";

const Skills = () => {
    const state = [
        {
                name: 'logo-react',
                size: '100',
                title: 'React',
        },
        {
                name: 'logo-sass',
                size: '100',
                title: 'SASS'

        },
        {
                name: 'logo-typescript',
                size: '100',
                title: 'TypeScript'
        },
        {
                name: 'logo-nodejs',
                size: '100',
                title: 'NodeJS'
        },
        {
                name: 'logo-html',
                size: '100',
                title: 'HTML5'
        },
        {
                name: 'logo-vue',
                size: '100',
                title: 'VueJS'
            }
    ]
    return (
        <div className={s.skillsSection}>
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
                  <div className={s.additionalContent}>
                      <p className={s.andAlso}>and also</p>
                      <div className={s.additionalSkills}>
                          <div className={s.additionalSkillBlock}><p>React Redux</p></div>
                          <div className={s.additionalSkillBlock}><p>Figma</p></div>
                          <div className={s.additionalSkillBlock}><p>Material UI</p></div>
                          <div className={s.additionalSkillBlock}><p>StoryBook</p></div>
                          <div className={s.additionalSkillBlock}><p>Swagger</p></div>
                          <div className={s.additionalSkillBlock}><p>Redux toolkit</p></div>
                          <div className={s.additionalSkillBlock}><p>React Router Dom</p></div>
                          <div className={s.additionalSkillBlock}><p>Webpack</p></div>
                          <div className={s.additionalSkillBlock}><p>SCSS</p></div>
                      </div>
                  </div>
              </div>
            </div>
        </div>

    );
}

export default Skills;
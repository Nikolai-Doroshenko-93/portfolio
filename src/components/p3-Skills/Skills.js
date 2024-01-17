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
                  <div className={s.neonTitle}>
                      <Neon
                      title={'My Skills'}
                      />
                  </div>
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
              </div>
            </div>
        </div>

    );
}

export default Skills;
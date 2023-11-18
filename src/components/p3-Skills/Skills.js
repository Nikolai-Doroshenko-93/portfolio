import React from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

import {Zoom} from "react-reveal";
import Neon from "../../common/NeonFont/Neon";

const Skills = () => {
    const state = {
        react : {
            name: 'logo-react',
            size: '100',
            title: 'React',
        },
        saas: {
            name: 'logo-sass',
            size: '100',
            title: 'SASS'
        },
        typescript: {
            name: 'TypeScript',
            size: '100',
            title: 'TypeScript'
        },
        nodejs: {
            name: 'logo-nodejs',
            size: '100',
            title: 'NodeJS'
        },
        html: {
            name: 'logo-html',
            size: '100',
            title: 'HTML5'
        },
        vuejs: {
            name: 'logo-vue',
            size: '100',
            title: 'VueJS'
        }
    }
    return (
        <div className={s.skillsSection}>
            <div className={s.skillsBlock}>
              <div className={c.content}>
                      <Neon
                      title={'My Skills'}
                      />
                  <div className={s.contentBlock}>
                      <Zoom>
                          <SkillsItem
                                name={'logo-react'}
                                size={'100'}
                                title={'React'}
                                data-aos="zoom-in"
                          />
                          <SkillsItem
                                name={'logo-sass'}
                                size={'100'}
                                title={'SASS'}
                                data-aos="zoom-in"
                          />
                          <SkillsItem
                                name={'logo-typescript'}
                                size={'100'}
                                title={'TypeScript'}
                                data-aos="zoom-in"
                          />
                          <SkillsItem
                              name={'logo-nodejs'}
                              size={'100'}
                              title={'NodeJS'}
                              data-aos="zoom-in"
                          />
                          <SkillsItem
                              name={'logo-html'}
                              size={'100'}
                              title={'HTML5'}
                              data-aos="zoom-in"
                          />
                          <SkillsItem
                              name={'logo-vue'}
                              size={'100'}
                              title={'VueJS'}
                              data-aos="zoom-in"
                          />
                      </Zoom>
                  </div>
              </div>
            </div>
        </div>

    );
}

export default Skills;
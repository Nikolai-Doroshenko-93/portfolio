import React from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

const Skills = () => {
    return (
        <div>
            <div className={s.skillsBlock}>
              <div className={c.content}>
                  <h3 className={s.title}>My Skills</h3>
                  <div className={s.contentBlock}>
                    <SkillsItem
                        name={'logo-react'}
                        size={'50'}
                        title={'React'}
                    />
                    <SkillsItem
                        name={'logo-sass'}
                        size={'50'}
                        title={'SASS'}
                    />
                    <SkillsItem
                        name={'logo-typescript'}
                        size={'50'}
                        title={'TypeScript'}
                    />
                      <SkillsItem
                          name={'logo-nodejs'}
                          size={'50'}
                          title={'NodeJS'}
                      />
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Skills;
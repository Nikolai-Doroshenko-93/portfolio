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
                        size={'100'}
                        title={'React'}
                    />
                    <SkillsItem
                        name={'logo-sass'}
                        size={'100'}
                        title={'SASS'}
                    />
                    <SkillsItem
                        name={'logo-typescript'}
                        size={'100'}
                        title={'TypeScript'}
                    />
                      <SkillsItem
                          name={'logo-nodejs'}
                          size={'100'}
                          title={'NodeJS'}
                      />
                      <SkillsItem
                          name={'logo-html'}
                          size={'100'}
                          title={'HTML5'}
                      />
                      <SkillsItem
                          name={'logo-vue'}
                          size={'100'}
                          title={'VueJS'}
                      />
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Skills;
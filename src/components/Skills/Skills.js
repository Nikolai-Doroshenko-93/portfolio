import React, {FunctionComponent, useEffect} from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";
import AOS from 'aos'
import 'aos/dist/aos.css'

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
                        aosOptions={'fade-left'}
                    />
                    <SkillsItem
                        name={'logo-sass'}
                        size={'100'}
                        title={'SASS'}
                        aosOptions={'fade-up'}
                    />
                    <SkillsItem
                        name={'logo-typescript'}
                        size={'100'}
                        title={'TypeScript'}
                        aosOptions={'fade-right'}
                    />
                      <SkillsItem
                          name={'logo-nodejs'}
                          size={'100'}
                          title={'NodeJS'}
                          aosOptions={'fade-left'}
                      />
                      <SkillsItem
                          name={'logo-html'}
                          size={'100'}
                          title={'HTML5'}
                          aosOptions={'fade-down'}
                      />
                      <SkillsItem
                          name={'logo-vue'}
                          size={'100'}
                          title={'VueJS'}
                          aosOptions={'fade-right'}
                      />
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Skills;
import React from "react";
import s from './Skills.module.css';
import c from '../../common/styles/Content.module.css'
import SkillsItem from "./SkillsItem/SkillsItem";

const Skills = () => {
    return (
        <div>
            <div className={s.skillsBlock}>
              <div className={c.content}>
                  <div className={s.contentBlock}>
                    <SkillsItem/>
                    <SkillsItem/>
                    <SkillsItem/>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Skills;
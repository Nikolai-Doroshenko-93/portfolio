import React from "react";
import s from './SkillsItem.module.css';

const SkillsItem = () => {
    return (
        <div className={s.skillsItemBlock}>
            <div className={s.image}></div>
            <h3 className={s.title}>React</h3>
            <div className={s.description}>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Nulla turpis sapien, accumsan
                    nec felis nec, elementum gravida
                    leo. Ut id felis vitae est tincidunt
                    dignissim eget nec tellus. Donec et congue lorem.
                </p>
            </div>
        </div>
    );
}

export default SkillsItem;
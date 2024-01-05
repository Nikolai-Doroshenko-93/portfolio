import React, {useEffect} from "react";
import s from './SkillsItem.module.css';
import Icons from '../../../common/Icons'

const SkillsItem = (props) => {

    return (
        <div className={s.skillsItemBlock}>
            <div className={s.image}>
                <Icons
                    name={props.name}
                    size={props.size}
                />
            </div>
            <h4 className={s.title}>{props.title}</h4>
        </div>
    );
}

export default SkillsItem;
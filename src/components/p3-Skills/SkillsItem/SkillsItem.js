import React, {useEffect} from "react";
import s from './SkillsItem.module.css';
import Icons from '../../../common/Icons'
import 'aos/dist/aos.css'

const SkillsItem = (props) => {

    return (
        <div className={s.skillsItemBlock}
             // data-aos={props.aosOptions}
        >
            <div className={s.image}>
                <Icons
                    name={props.name}
                    color='rgb(106, 247, 151)'
                    size={props.size}
                />
            </div>
            <h4 className={s.title}>{props.title}</h4>
            <div className={s.description}>
            </div>
        </div>
    );
}

export default SkillsItem;
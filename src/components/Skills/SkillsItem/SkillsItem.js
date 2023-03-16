import React, {useEffect} from "react";
import s from './SkillsItem.module.css';
import Icons from '../../../common/Icons'
import AOS from "aos";
import 'aos/dist/aos.css'

const SkillsItem = (props) => {

    return (
        <div className={s.skillsItemBlock}
             // data-aos={props.aosOptions}
        >
            <div className={s.image}>
                <Icons
                    name={props.name}
                    color='#49f8a1'
                    size={props.size}
                />
            </div>
            <h4 className={s.title}>{props.title}</h4>
            <div className={s.description}>
                <p className={s.description}>
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
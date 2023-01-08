import React from "react";
import s from './Main.module.css';
import c from '../../common/styles/Content.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.content}>
                <div className={s.contentBlock}>
                    <div className={s.greetings}>
                        <span>Hi There</span>
                        <h1>I am Nikolai</h1>
                        <p>A Frontend Developer</p>
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
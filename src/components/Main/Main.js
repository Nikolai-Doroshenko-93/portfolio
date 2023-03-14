import React from "react";
import s from './Main.module.css';
import c from '../../common/styles/Content.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={c.content}>
                <div className={s.contentBlock}>
                    <div className={s.greetings}>
                        <p className={s.p}><span className={s.span}>Name: </span>Nikolai Doroshenko</p>
                        <p className={s.p}><span className={s.span}>Age: </span>29</p>
                        <p className={s.p}><span className={s.span}>Specialization: </span>Frontend Developer</p>
                        <p className={s.p}><span className={s.span}>Mail: </span>doroshenko.nikolai.a@gmail.ru</p>
                    </div>
                    <div className={s.photo}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
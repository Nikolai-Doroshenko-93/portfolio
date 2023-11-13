import React from "react";
import s from './Main.module.css';
import c from '../../common/styles/Content.module.css'
import avatar from '../../common/img/avatar.jpg'

const Main = () => {
    //
    // const particlesOpt = {
    //     "particles": {
    //         "number": {
    //             "value": 150,
    //             "density": {
    //                 "enable": true,
    //                 "value_area": 800
    //             }
    //         }
    //     }
    // }

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
                    <div className={s.photo}>
                        <img src={avatar} className={s.imgElement}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
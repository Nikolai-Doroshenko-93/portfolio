import React from "react";
import s from './Footer.module.css';
import c from '../../common/styles/Content.module.css'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={c.content}>
                <h3>Nikolai Doroshenko</h3>
                <div className={s.contentBlock}>
                    <div className={s.iconContainer}>
                        <a className={s.icon}></a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon}></a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon}></a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon}></a>
                    </div>
                </div>
                <p>© All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
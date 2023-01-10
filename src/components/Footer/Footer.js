import React from "react";
import s from './Footer.module.css';
import c from '../../common/styles/Content.module.css'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={c.content}>
                <h3>Nikolai Doroshenko</h3>
                <div className={s.contentBlock}>
                    <div className={s.iconContainer}></div>
                    <div className={s.iconContainer}></div>
                    <div className={s.iconContainer}></div>
                    <div className={s.iconContainer}></div>
                </div>
                <p>© All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
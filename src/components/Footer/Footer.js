import React from "react";
import s from './Footer.module.css';
import c from '../../common/styles/Content.module.css'
import Icons from '../../common/Icons/Icons'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContent}>
                <h3>Nikolai Doroshenko</h3>
                <div className={s.iconBlock}>
                    <div className={s.iconContainer}>
                        <a className={s.icon}>
                            <Icons
                                name='logo-github'
                                size='50'
                                color='c4c4c4'
                                className={s.icon}
                            />
                        </a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon}>
                            <Icons
                                name='logo-linkedin'
                                size='50'
                                color='f2f0f0'
                                className={s.icon}
                            />
                        </a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon}>
                            <Icons
                                name='logo-facebook'
                                size='50'
                                color='#101010'
                                className={s.icon}
                            />
                        </a>
                    </div>

                </div>
                <p>© All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
import React from "react";
import s from './Footer.module.css';
import Icons from '../../common/Icons/Icons'
import {Zoom} from "react-reveal"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContent}>
                <a name={"contacts"}></a>
                <h4>Nikolai Doroshenko</h4>
                <p>Phone: +375297880889</p>
                <p>doroshenko.nikolai.a@gamil.com</p>
                <Zoom>
                    <div className={s.iconBlock}>
                    <div className={s.iconContainer}>
                        <a className={s.icon} href={"https://github.com/Nikolai-Doroshenko-93"}>
                            <Icons
                                name='logo-github-footer'
                                size='50'
                                color='c4c4c4'
                                className={s.icon}
                            />
                        </a>
                    </div>
                    <div className={s.iconContainer}>
                        <a className={s.icon} href={"https://linkedin.com/in/николай-дорошенко-13607a239"}>
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
                </Zoom>
                <p>© All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
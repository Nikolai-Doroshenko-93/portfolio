import React from "react";
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.nav}>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a href="#contacts">Contacts</a>
        </div>
    );
}

export default Nav;
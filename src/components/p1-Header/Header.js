import React from "react";
import s from './Header.module.css';
import Nav from "./Nav/Nav";
import {Zoom} from "react-reveal"

const Header = () =>  {
    return (
        <div className={s.header}>
                <div className={s.contentBlock}>
                    <Nav/>
                </div>
        </div>
    );
}

export default Header;
import React from "react";
import s from './Contacts.module.css';
import c from '../../common/styles/Content.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={c.content}>
                <div className={s.contentBlock}>
                    <form className={s.formBlock}>
                        <input className={s.input}/>
                        <input className={s.input}/>
                        <textarea className={s.textarea}></textarea>
                    </form>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
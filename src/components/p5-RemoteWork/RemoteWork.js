import React from "react";
import s from './RemoteWork.module.css';
import c from '../../common/styles/Content.module.css'
import {ButtonAcid} from "../../common/ButtonAcid/ButtonAcid";

const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={c.content}>
              <div className={s.contentRemoteWork}>
                <div className={s.contentBlock}>
                  <h2 className={s.title}>I'm considering remote work</h2>
                  <div className={s.button}>
                      <ButtonAcid/>
                      <a className={s.href} href={"mailto: doroshenko.nikolai.a@gamil.com"}></a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

export default RemoteWork;
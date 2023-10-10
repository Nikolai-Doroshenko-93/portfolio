import React from "react";
import s from './RemoteWork.module.css';
import {ButtonAcid} from "../../common/ButtonAcid/ButtonAcid";

const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={s.contentRemoteWork}>
                <div className={s.contentBlock}>
                  <h2 className={s.title}>I'm considering remote work</h2>
                  <div className={s.button}>
                      <ButtonAcid/>
                  </div>


                </div>
              </div>
        </div>
    );
}

export default RemoteWork;
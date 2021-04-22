import React, {Component} from 'react';
import './GroupMoreInfo.css'
import Button from "../Button/Button";

const GroupMoreInfo = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <Button onClick={handleClose} text="Закрити"/>

            </section>
        </div>
    );
};

export default GroupMoreInfo;
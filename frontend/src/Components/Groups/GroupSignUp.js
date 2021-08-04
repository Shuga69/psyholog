import React, {Component, useState} from 'react';
import './GroupSignUp.css'
import Button from "../Button/Button";
import axios from "axios"

const GroupMoreInfo = ({ handleClose, id, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    const [ sent, setSent ] = useState(false);
    const [ to, setTo ] = useState("");
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ secondName, setSecondName ] = useState("");
    const [ eventId, setEventId] = useState([]);
    const handleSend = async (e) => {
        setSent(true);
        eventId.push(id);
        console.log(id);
        console.log(eventId);
        console.log(to);
        try {
            await axios.post("https://psyhology-site.herokuapp.com/user/create", {
                email: to,
                phoneNumber: phoneNumber,
                firstName: firstName,
                secondName: secondName,
                eventId: eventId
            })
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className={showHideClassName}>

            {!sent ? (
                <form className='modal-main' onSubmit={handleSend}>
                    <div className="modal-main__inner">
                    <input className="custom-input" type="text" placeholder="email" value={to} onChange={(e) => setTo(e.target.value)} />
                    <input className="custom-input" type="text" placeholder="Номер телефону" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input className="custom-input" type="text" placeholder="Ім'я" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input className="custom-input" type="text" placeholder="Прізвище" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                    <div className="button-box">
                        <button className="btn-link" type="submit">Записатись</button>
                        <button className="btn-link" type="button" onClick={handleClose}>Закрити</button>
                    </div>
                    </div>
                </form>
            ) : (
                <h1>Email Sent</h1>
            )}


        </div>
    );
};

export default GroupMoreInfo;
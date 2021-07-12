import React, {Component, useState} from 'react';
import './GroupMoreInfo.css'
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
            await axios.post("http://localhost:8080/user/create", {
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
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />

                    <button type="submit">Send Email</button>
                </form>
            ) : (
                <h1>Email Sent</h1>
            )}


        </div>
    );
};

export default GroupMoreInfo;
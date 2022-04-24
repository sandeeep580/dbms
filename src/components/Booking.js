import React, { useState } from 'react';
import '../styles/Booking.css';
import axios from 'axios';

function Booking({train, setShow}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClose = () => {
        setShow(null);
    };

    const handleBooking = async () => {
        if(!email || !name){
            alert("enter all the details");
            return;
        }
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const BODY = {
            email_id : email,
            train_num : train.train_number
        }

        try{
            const rows = await axios.post(
                "http://localhost:5000/user/booking",
                BODY
            );
            setShow(null);
            alert("Your ticket has been booked !");
        }catch(err){
            console.log(err);
        }
        

    }


    return (
        <div className='booking__form'>
            <h2>{train.train_name}</h2>
            <h3>{train.train_number}</h3>
            <div className='train__route'>
                <p>From : {train.from_place}</p>
                <p>To : {train.to_place}</p>
            </div>
           <input type = "text" placeholder='Name' value = {name} onChange = {e => setName(e.target.value)} required/>
           <input type = "email" placeholder='Email' value = {email} onChange = {e => setEmail(e.target.value)} required/> 
           <div className='booking__buttons'>
              <button onClick={handleBooking}> Book </button> 
              <button onClick = {handleClose}> Close </button>
           </div>

        </div>
    );}

export default Booking;
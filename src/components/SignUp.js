import React from 'react';
import '../styles/SignUp.css';

function SignUp() {
    return (
        <div className='outer__container'>
            <form className='register__form'>
                <h1>RAILWAY TICKET RESERVATION</h1>
                <input type="text" placeholder='Name' />
            </form>
        </div>
    );}

export default SignUp;
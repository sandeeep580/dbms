import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function SignUp({ setSignin, setLogin, sethomepage }) {

    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    const handleRegister = async (e) => {

        console.log("here");

        if(!text || !email || !password || !phone){
            alert("Enter complete details");
            return;
        }
        e.preventDefault();
        try{

            const config = {
                headers : {
                    "Content-Type" : "application/json"
                }
            }

            const BODY = {
                user_name : text,
                user_password : password,
                email_id : email,
                phone_num : phone
            }

            const rows = await axios.post(
                "http://localhost:5000/user/register",
                BODY
            );

            console.log(rows.data.rows);

            setLogin(false);
            sethomepage(true);
            setSignin(false);

        }catch(err){
            console.log(err);
        }
    }

    const moveToLogin = () => {
        setSignin(false);
        setLogin(true);
        sethomepage(false);
    }


    return (
        <div className='outer__container'>
            <form className='register__form' onSubmit={handleRegister}>
                <h1>RAILWAY RESERVATION</h1>
                <input type="text" placeholder='Name' value = {text} onChange = {e => setText(e.target.value)} required/>
                <input type="email" placeholder='Email' value = {email} onChange = {e => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Password'  value = {password} onChange = {e => setPassword(e.target.value)} required/>
                <input type="number" placeholder='Phone Number' value = {phone} onChange = {e => setPhone(e.target.value)} required/>
                <button onClick={handleRegister}>Register</button> 
            </form>
            <p>Already have an account?<button onClick = {moveToLogin}>Log in</button></p>
        </div>
    );}

export default SignUp;
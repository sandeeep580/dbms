import React, { useState } from 'react';
import '../styles/SignUp.css';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Login({ setSignin, setLogin, sethomepage }) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleLogin = async (e) => {

        if(!email || !password){
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
                user_password : password,
                email_id : email
            }

            const rows = await axios.post(
                "http://localhost:5000/user/login",
                BODY
            );

            console.log(rows.data.rows);
            console.log(rows.data.rows.length);
            if(rows.data.rows.length == 0){
                alert("Invalid credentials");
                return;
            }

            setLogin(false);
            setSignin(false);
            sethomepage(true);
            
        }catch(err){
            console.log(err);
        }
    }


    return (
        <div className='outer__container'>
            <form className='register__form' onSubmit = {handleLogin}>
                <h1>RAILWAY RESERVATION</h1>
                <input type="email" placeholder='Email' value = {email} onChange = {e => setEmail(e.target.value)} required/>
                <input type="password" placeholder='Password' value = {password} onChange = {e => setPassword(e.target.value)} required/>
                <button onClick={handleLogin}>Log in</button> 
            </form>
        </div>
    );}

export default Login;
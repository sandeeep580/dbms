import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import train from '../assets/Train.png';
import SingleTrain from './SingleTrain';
import axios from 'axios';
import Booking from './Booking';

function Home() {

    const [allTrains, setAllTrains] = useState(null);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(null);

    const fetchData = async () => {
        console.log("here");
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        try{

            const rows = await axios.get(
                "http://localhost:5000/trains"
            )

            console.log(rows.data.rows);
            setAllTrains(rows.data.rows);
            setLoading(false);
        }catch(err){
            console.log("here 2");
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    },[]);


    return (
        <div className='home'>
            <div className='home__logo'>RAILWAY RESERVATION</div>
            <img src = {train} className="home__image" />
            <div className='train__table'>All Train Details</div>
            {loading && <p>Loading...</p>}
            {!loading && allTrains && 
                <>
                    {allTrains.map(train => (
                        <SingleTrain 
                            trainNumber={train.train_number} 
                            trainName = {train.train_name} 
                            departingStation = {train.from_place} 
                            finalStation = {train.to_place} 
                            departingTime = {train.journey_starting_time} 
                            finalTime = {train.journey_ending_time} 
                            train = {train}
                            setShow = {setShow}
                            />
                    ))}
                </>
            }
            {show && <Booking train = {show} setShow = {setShow}/>}
        </div>
    );}

export default Home;
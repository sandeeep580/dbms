import React from 'react';
import '../styles/SingleTrain.css';

function SingleTrain({trainNumber, trainName, departingStation, finalStation, departingTime, finalTime, train, setShow}) {
    
    const handleBooking = () => {
        setShow(train);
    }
   
    return (
        <div className='train__details'>
            <h3>{trainNumber}</h3>
            <h3>{trainName}</h3>
            <h3>{departingStation}</h3>
            <h3>{finalStation}</h3>
            <h3>{departingTime}</h3>
            <h3>{finalTime}</h3>
            <button onClick = {handleBooking}>Book</button>
        </div>
    );}

export default SingleTrain;
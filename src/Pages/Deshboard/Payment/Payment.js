import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const {treatment,price, slot, appointmentDate} = booking;
    return (
        <div>
            <h2 className='text-3xl mb-3'>Payment for {treatment}</h2>
            <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on{appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;
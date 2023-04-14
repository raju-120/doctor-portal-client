import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([]);

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='my-16'>
            <p className='text-xl text-center text-secondary font-bold'>Available Services on {format(selectedDate,'PP')}</p>
            <h1 className='mt-4 text-xl text-center'>Please select a service</h1>
            <div className='mt-14 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    option={option}></AppointmentOption>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;
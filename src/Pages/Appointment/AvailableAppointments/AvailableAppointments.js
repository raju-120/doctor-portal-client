import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import {  useQuery } from 'react-query';



const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    const {data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions');
            const data = await res.json();
            return data
        }
    })


    return (
        <section className='my-16'>
            <p className='text-xl text-center text-secondary font-bold'>Available Services on {format(selectedDate,'PP')}</p>
            <h1 className='mt-4 text-xl text-center'>Please select a service</h1>
            <div className='mt-14 grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    >

                    </AppointmentOption>)
                }
            </div>
            {
                treatment && 
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                >

                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;
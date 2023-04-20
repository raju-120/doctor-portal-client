import { format } from 'date-fns';
import React, {  useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import {  useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';



const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data: appointmentOptions = [], refetch , isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

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
                    refetch={refetch}
                >

                </BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;
import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
import useTitle from '../../../useHooks/useTitle';

const Appointment = () => {
    useTitle('Appointments');
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
             ></AppointmentBanner>

            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import useTitle from '../../../useHooks/useTitle';

const MyAppointment = () => {
    useTitle('Dashboard');
    const {user} = useContext(AuthContext);

    const url = `https://doctors-portal-server-ashy-xi.vercel.app/bookings?email=${user?.email}`

    const {data: bookings = []} =  useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointment</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Bill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking,i) => 
                                <tr className='hover' key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link 
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button 
                                                className='btn btn-sm btn-primary'>
                                                Pay
                                            </button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span
                                        className='text-green-500'>
                                            Paid
                                        </span>
                                    }
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
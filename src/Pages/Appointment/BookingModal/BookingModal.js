import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookingModal = ({treatment,selectedDate, setTreatment, refetch}) => {
    //treatment is just another name of appointmentOptions with name,slots,_id
    const {name: treatmentName, slots, price} = treatment; 
    const date = format(selectedDate, 'PP');
    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value; 
        const phone = form.phone.value; 
        //[3,4,6].map((value, i) => console.log(value))
        
        const booking ={
            treatment: treatmentName,
            appointmentDate: date,
            patient: name,
            slot,
            email,
            phone,
            price
        }

        //TODO: send data to the server
        //and once data is saved then close the modal
        //and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                
                setTreatment(null);
                toast.success('Booking Confirm');
                refetch();
            }
            else{
                toast.error(data.message);
            }
        })
    }
    return (
        <>
         
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {treatmentName} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full ">
                            {/* <option disabled selected>Select appointment slots?</option> */}
                            {
                                slots.map((slot,i) =><option 
                                    value={slot}
                                    key={i}
                                >{slot}</option> )
                            }
                        </select>
                        <input type="text" name='name' disabled defaultValue={user?.displayName}  placeholder="Name" className="input input-bordered w-full" />
                        <input type="text" name='email' disabled defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full" required/>
                        <br />
                        <input type="submit" className='w-full max-w-xl btn btn-accent' value='Submit'/>
                    </form>
                </div>
            </div>   
        </>
    );
}

export default BookingModal;
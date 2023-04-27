import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const {register , formState: { errors } ,handleSubmit} = useForm();
    const imageHostKey = process.env.REACT_APP_imgBb_key;
    const navigate = useNavigate();

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })


    const handleAddDoctor = data =>{
        //console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            if(imgData.success){
                //console.log(imgData.data.url);
                const doctor ={
                    name: data.name,
                    email: data.email,
                    specialty : data.specialty,
                    image: imgData.data.url
                }

                //save doctor information to the database
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageDoctors')
                })
            }
        }) 
    }

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='w-97 p-7'>
            <h2 className='text-4xl'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                    
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {
                            ...register('name',{
                                required: 'Name required'
                            })}
                         
                         className="input input-bordered w-full max-w-xs" />
                         
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"{
                            ...register('email',{
                            required: 'Email Address required'})
                        }
                         
                         className="input input-bordered w-full max-w-xs" />
                         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                         
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select 
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                            {/* <option disabled selected>Please select a specialty</option> */}
                            {
                                specialties.map(specialty => <option 
                                    key={specialty._id}
                                    value={specialty.name}
                                    >{specialty.name}</option>)
                            }
                        </select> 
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" {
                            ...register('image',{
                                required: 'photo is required'
                            })}
                         className="input input-bordered w-full max-w-xs p-2"  />
                         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                         
                    </div>
                    <input className='btn btn-accent w-80 mt-4' value="Add Doctor" type="submit" />
                </form>
        </div>
    );
};

/* 
 * Three place to store images
 * 1. Image hosting server
 * 2. File system of your server
 * 3. mongodb
*/

export default AddDoctor;
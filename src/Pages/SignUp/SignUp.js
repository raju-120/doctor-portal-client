import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register , formState: { errors } ,handleSubmit} = useForm();
    const handleSignUp = (data) =>{
        console.log(data)
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    
                    
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {
                            ...register('password',
                            {
                                required: 'Password Address required',
                                minLength: {value: 6, message: 'password must be 6 character'}
                            }
                                
                        )}
                        
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        
                    </div>

                    
                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
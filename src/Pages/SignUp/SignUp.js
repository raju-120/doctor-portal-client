import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const {register , formState: { errors } ,handleSubmit} = useForm();
    const {createUser, updateUser , googleSignIn} = useContext(AuthContext);
    const [signUpError , setSignUpError] = useState(''); 
    const navigate = useNavigate();
    


    const handleSignUp = (data) =>{
        
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('User Created Successfully.');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
                .then(() =>{ 
                    saveUser(data.name, data.email)
                 })
                .catch(err => console.log(err))
        })
        .catch(err => {
            console.log(err)
            setSignUpError(err.message)
        })
    }

    const saveUser = (name, email) =>{
        const user = {name, email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/');
        })
    }

    const handleGoogleLogIn = () =>{
        
        googleSignIn()
        .then( result =>{
             const user = result.user;
             console.log(user);
            })
        .catch(err => console.error(err))
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
                                minLength: {value: 6, message: 'password must be 6 character'},
                                pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters'}
                            }
                                
                        )}
                        
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                        
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link> </p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleLogIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
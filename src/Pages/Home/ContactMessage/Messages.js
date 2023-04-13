import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import ParimaryButton from '../../../components/PrimaryButton/ParimaryButton';

const Messages = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
                borderRadius: '10px'
            }}
        >
            <div className="hero justify-center">
                <div className="hero-content flex-col mt-16 mb-16">
                    <div className="text-center ">
                        <h4 className="text-xl font-bold text-primary">Contact us</h4>
                        <h1 className="text-5xl text-white">Stay connected with us</h1>
                    </div>
                    <div className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                               
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                               
                                <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                
                            </div>
                            <ParimaryButton>Submit</ParimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Messages;
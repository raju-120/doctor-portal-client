import React from 'react';
import bg from '../../../../assets/images/bg.png'
import chair from '../../../../assets/images/chair.png';
import ParimaryButton from '../../../../components/PrimaryButton/ParimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <section className='bgImg'
            
        >
            <div className="hero">
                <div className="lg:mt-52 lg:mb-64 hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className=" lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold ">Your New Smile Starts Here</h1>
                        <p className="py-6">Smiles are contagious so go forth and contaminate as many people as you can.Be the reason someone smiles today.A genuine smile comes from the heart, but a healthy smile needs good dental care.</p>
                        <ParimaryButton>Get Started</ParimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
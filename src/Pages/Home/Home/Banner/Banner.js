import React from 'react';
import background from '../../../../assets/images/bg.png';
import chair from '../../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero">
            <div style={{
                width: '1363px',
                height: '838px',
                backgroundSize: 'cover',
                backgroundImage: `url(${background})`,
                borderRadius: '20px'

            }}>

            </div>  
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className=" lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Smiles are contagious so go forth and contaminate as many people as you can.Be the reason someone smiles today.A genuine smile comes from the heart, but a healthy smile needs good dental care.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
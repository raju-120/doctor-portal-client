import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardsData =[
        {
            id:1,
            name: 'Opening Hour',
            description: 'Open 9.00 am to 5.00 pm everyday',
            icon: clock,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary'
        },
        {
            id:2,
            name: 'Visit our location',
            description: 'House # 48, Road # 9/A, Dhanmondi, Dhaka 1209',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact us now',
            description: '+09610-009612',
            icon: phone,
            bgClass: 'bg-primary bg-gradient-to-r from-primary to-secondary'
        } 
    ]
    return (
        <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                cardsData.map(card => <InfoCard
                key={card.id}
                card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;
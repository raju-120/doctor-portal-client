import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesCard = [
        {
            id:1,
            name: 'Fluoride Treatment',
            description: 'Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth enamel, making them less susceptible to bacteria and cavities. It slows and may even reverse the development of decays and cavities by harming the bacteria which causes the cavities.',
            icon: fluoride
        },
        {
            id:2,
            name: 'Cavity Filling',
            description: 'Cavities are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. Cavities, also called tooth decay or caries, are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks and not cleaning your teeth well.',
            icon: cavity
        },
        {
            id:3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening involves bleaching your teeth to make them lighter. It can not make your teeth brilliant white, but it can lighten the existing colour by several shades.',
            icon: whitening
        },
    ] 
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesCard.map(card => <ServiceCard
                    key={card.id}
                    card={card}>

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;
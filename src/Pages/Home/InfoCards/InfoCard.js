import React from 'react';

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    return (
        <div className={`text-white card p-6 nd:card-side shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie"/>
            </figure>
            <div className="card-body">
                <h2 className="card-titles">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;
import React from 'react';

const ParimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            {children}
        </button>
    );
};

export default ParimaryButton;
import React from 'react';

const Loader = () => {
    return (
        <div style={{diaplay: 'flex', justifyContent: 'center', margin: '.5rem'}}>
            <div className="lds-dual-ring"></div>
        </div>
    );
};

export default Loader;
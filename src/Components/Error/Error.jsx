import React from 'react';
import BackHome from '../BackHome';
import NotFoundImage from './404.svg'

const Error = () => {
    return (
        <div style={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <img src={NotFoundImage} alt='404 Page Not Found' style={{ width: '60%' }} />
            <BackHome></BackHome>
        </div>
    );
};

export default Error;
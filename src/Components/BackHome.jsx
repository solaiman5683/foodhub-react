import React from 'react';
import { Link } from 'react-router-dom';

const BackHome = () => {
    return (
        <Link to='/'>
            <button style={{
                fontSize: '1.2em',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer'
            }}>Back to Home</button>
        </Link>
    );
};

export default BackHome;
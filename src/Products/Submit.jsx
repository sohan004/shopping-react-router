import React from 'react';
import { Link } from 'react-router-dom';

const Submit = () => {
    return (
        <div className='text-center'>
            <img className='img-fluid' src="../../public/giphy.gif" alt="" />
            <div className='text-center my-2'>
                <button className="btn btn-secondary"><Link className='text-white' to='/'>Go To Home</Link></button>
            </div>
        </div>
    );
};

export default Submit;
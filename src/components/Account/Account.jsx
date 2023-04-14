import React from 'react';
import Singin from './Singin';

const Account = () => {
    return (
        <div className='container '>
            <div className='d-flex flex-column flex-md-row align-items-center gap-4'>
                <div className='w-100 w-md-50'><Singin></Singin></div>
                <div className='w-100 w-md-50 opacity-25'><img src="log.jpg" alt="" className="img-fluid rounded rounded-5" /></div>
            </div>
        </div>
    );
};

export default Account;
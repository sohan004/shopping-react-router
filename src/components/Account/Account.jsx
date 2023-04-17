import React, { useContext, useState } from 'react';
import Singin from './Singin';
import Profile from './Profile';
import { AuthContex } from '../AuthProvider';

const Account = () => {
    const { user, out } = useContext(AuthContex)
    return (
        <div className='container '>
            <div className='d-flex flex-column flex-md-row align-items-center gap-4'>
                <div className='w-100 w-md-50'>{user ? <Profile ></Profile> : <Singin ></Singin>}</div>
                <div className='w-100 w-md-50 opacity-25'><img src="log.jpg" alt="" className="img-fluid rounded rounded-5" /></div>
            </div>
        </div>
    );
};

export default Account;
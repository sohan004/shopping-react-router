import React, { useContext } from 'react';
import { AuthContex } from '../AuthProvider';

const Profile = () => {
    const { user, out } = useContext(AuthContex)


    const logout = () => {
        out().then().catch()
    }
    return (
        <div className='text-center bg-success bg-opacity-25 rounded p-3'>
            <img className='w-25 rounded-circle img-fluid' src={user.photoURL} alt="" />
            <h5 className='mt-3'>Name: {user.displayName}</h5>
            <h5 className=''>Email: {user.email}</h5>
            <h5 className=''>Account Verified: {user.emailVerified ? 'yes' : 'no'}</h5>
            <button onClick={logout} className="btn btn-danger">Log Out</button>

        </div>
    );
};

export default Profile;
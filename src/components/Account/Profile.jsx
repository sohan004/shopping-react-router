import React from 'react';

const Profile = ({ setUserData, userData }) => {
    console.log(userData)
    return (
        <div className=' bg-success bg-opacity-25 rounded p-3'>
            <img className='w-25 rounded-circle img-fluid' src={userData.photoURL} alt="" />
            <h5 className='mt-3'>Name: {userData.displayName}</h5>
            <h5 className=''>Email: {userData.email}</h5>
            <h5 className=''>Account Verified: {userData.emailVerified ? 'yes' : 'no'}</h5>

        </div>
    );
};

export default Profile;
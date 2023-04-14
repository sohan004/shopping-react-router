import React, { useState } from 'react';
import './Sign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Singin = () => {
    const [eye, setEye] = useState(false)
    return (
        <div>
            <h1 className='text-center fw-bolder'>Log in</h1>
            <div className='bg-success p-3 bg-opacity-25'>
                <form action="">
                    <h5 className='fw-bolder'>Email</h5>
                    <input type="email" name="email" className='p-2 rounded mb-3 border-0 border-bottom border-secondary w-100 border-2' placeholder='exmple@gmail.com' />

                    <div className='position-relative'>
                        <h5 className='fw-bolder'>Password</h5>
                        <input type={eye ? 'text' : 'password'} name="pass" className='p-2 rounded mb-1 border-0 border-bottom border-secondary w-100 border-2' placeholder='password' />
                        {eye ? <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEye} /> : <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEyeSlash} />}
                    </div>
                    <button className='btn btn-link p-0'>forget password</button>
                    <p className='text-danger'></p>
                    <div className='text-center'>
                        <input type="submit" className="btn subbtn" value="Sign In" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <hr className='w-100' />
                        <h4 className='fw-light mx-2'>or</h4>
                        <hr className='w-100' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-4 gap-3'>
                        <i className="fa-brands fa-google fa-xl"></i>
                        <i className="fa-brands fa-github fa-xl"></i>
                    </div>
                    <p className='text-center'> You have no account? <Link to='/register'>sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Singin;
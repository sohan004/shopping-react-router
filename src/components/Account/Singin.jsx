import React, { useRef, useState } from 'react';
import './Sign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../fireb';
import Swal from 'sweetalert2';

const Singin = ({ setUserData }) => {
    const [eye, setEye] = useState(false)
    const [eror, setEror] = useState('')
    const emailraf = useRef()

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const gitProvider = new GithubAuthProvider()


    const socialLogin = s => {
        signInWithPopup(auth, s)
            .then(result => {
                setUserData(result.user)
            })
            .catch(error => {
                setEror(error.message)
            })
    }



    const handle = e => {
        e.preventDefault()
        const email = e.target.email.value
        const pass = e.target.pass.value
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                setUserData(result.user)
            })
            .catch(error => setEror(error.message))
    }


    const reset = () => {
        const eml = emailraf.current.value
        if (eml) {
            sendPasswordResetEmail(auth, eml)
                .then(() => {
                    Swal.fire(
                        'Reset Password',
                        'Go to your email box and reset your password',
                        'success'
                    )
                    setEror('')

                })
                .catch(error => setEror(error.message))

        } else {
            Swal.fire(
                'Type your email',
                '',
                'error'
            )
        }
    }


    return (
        <div>
            <h1 className='text-center fw-bolder'>Log in</h1>
            <div className='bg-success p-3 bg-opacity-25'>
                <form onSubmit={handle} action="">
                    <h5 className='fw-bolder'>Email</h5>
                    <input ref={emailraf} required type="email" name="email" className='p-2 rounded mb-3 border-0 border-bottom border-secondary w-100 border-2' placeholder='exmple@gmail.com' />

                    <div className='position-relative'>
                        <h5 className='fw-bolder'>Password</h5>
                        <input required type={eye ? 'text' : 'password'} name="pass" className='p-2 rounded mb-1 border-0 border-bottom border-secondary w-100 border-2' placeholder='password' />
                        {eye ? <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEye} /> : <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEyeSlash} />}
                    </div>
                    <button onClick={() => reset()} className='btn btn-link p-0'>forget password</button>
                    <p className='text-danger'>{eror}</p>
                    <div className='text-center'>
                        <input type="submit" className="btn subbtn" value="Sign In" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <hr className='w-100' />
                        <h4 className='fw-light mx-2'>or</h4>
                        <hr className='w-100' />
                    </div>
                    <div className='d-flex justify-content-center align-items-center my-4 gap-3'>
                        <i onClick={() => socialLogin(googleProvider)} className="fa-brands fa-google fa-xl"></i>
                        <i onClick={() => socialLogin(gitProvider)} className="fa-brands fa-github fa-xl"></i>
                    </div>
                    <p className='text-center'> You have no account? <Link to='/register'>sign up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Singin;
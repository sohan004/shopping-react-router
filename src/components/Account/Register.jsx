import React, { useContext, useState } from 'react';
import './Sign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContex } from '../AuthProvider';


const Register = () => {
    const { signup, update, emailv } = useContext(AuthContex)
    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const [eror, setEror] = useState('')





    const handle = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.pass.value

        console.log(name, email, pass)

        if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
            setEror('add 2 capital letter in your pass')
            return

        }

        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setEror('add 2 number in your pass')
            return
        }

        else {

            signup(email, pass)
                .then(result => {
                    setEror('')
                    console.log(result.user)
                    e.target.reset()
                    updp(result.user, name)
                    varify(result.user)


                })
                .catch(error => {
                    setEror(error.message)

                })
        }

    }


    const updp = (u, n) => {
        update(u, n)
            .then(() => '')
    }

    const varify = v => {
        emailv(v)
            .then(() => {
                Swal.fire(
                    'Account verify !!',
                    'Go to your email box and verify your account',
                    'success'
                  )
                  navigate('/account')

            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <h1 className='text-center fw-bolder'>Register</h1>
            <div className='bg-success p-3 bg-opacity-25'>
                <form onSubmit={handle} action="">
                    <h5 className='fw-bolder'>Name</h5>
                    <input required type="text" name="name" className='p-2 rounded mb-3 border-0 border-bottom border-secondary w-100 border-2' placeholder=' full name' />

                    <h5 className='fw-bolder'>Email</h5>
                    <input required type="email" name="email" className='p-2 rounded mb-3 border-0 border-bottom border-secondary w-100 border-2' placeholder='exmple@gmail.com' />

                    <div className='position-relative'>
                        <h5 className='fw-bolder'>Password</h5>
                        <input required type={eye ? 'text' : 'password'} name="pass" className='p-2 rounded mb-1 border-0 border-bottom border-secondary w-100 border-2' placeholder='password' />
                        {eye ? <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEye} /> : <FontAwesomeIcon onClick={() => setEye(!eye)} className='eye' icon={faEyeSlash} />}
                    </div>
                    <p className='text-danger'>{eror}</p>
                    <div className='text-center'>
                        <input type="submit" className="btn subbtn" value="Register" />
                    </div>
                    <div className='d-flex justify-content-center'>
                        <hr className='w-100' />
                        <h4 className='fw-light mx-2'>or</h4>
                        <hr className='w-100' />
                    </div>
                    <p className='text-center'> Already have acount? <Link to='/account'>sign in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
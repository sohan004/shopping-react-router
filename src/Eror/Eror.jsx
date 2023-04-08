import React from 'react';
import './Eror.css'
import { Link } from 'react-router-dom';

const Eror = () => {
    return (
        <>
            <div className="error-page">
                <div className="error-image">
                    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg" alt="Error" />
                </div>
                <div className="error-footer">
                    <Link to='/'>
                        <button className="error-button">Back To Home Page</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Eror;
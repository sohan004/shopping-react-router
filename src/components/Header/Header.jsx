import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner';
import Active from '../../Active/Active';
import './Header.css'

const Header = () => {
    const navigation = useNavigation()
    return (
        <>
            <nav className="navbar navbar-expand-lg position-sticky top-0 z-1 mb-3 bg-body-tertiary">
                <div className="container">
                    <h1>amar Zone</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fw-semibold ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Active className="nav-link active me-4" aria-current="page" to="/">Home</Active>
                            </li>
                            <li className="nav-item">
                                <Active className="nav-link active me-4" aria-current="page" to="/cart">Review Order
                                </Active>
                            </li>
                            <li className="nav-item">
                                <Active className="nav-link active me-4" aria-current="page" to="/about">About</Active>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {navigation.state === 'loading' && <Spinner></Spinner>}
            <Outlet></Outlet>
        </>
    );
};

export default Header;
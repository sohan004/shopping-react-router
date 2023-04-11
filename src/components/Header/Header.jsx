import React, { createContext, useEffect, useState } from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../../Spinner';
import Active from '../../Active/Active';
import './Header.css'
import { getData } from '../../Utiliti';

export const Contex = createContext(0)

const Header = () => {

    const navigation = useNavigation()

    const [bdg, setBdg] = useState()


    useEffect(() => {
        const newValu = []
        const getDat = getData()
        if (getDat) {
            for (const key in getDat) {
                newValu.push(key)
            }
        }
        setBdg(newValu.length)
    }, [])


    return (
        <>
            <Contex.Provider value={[bdg, setBdg]}>
                <nav className="navbar navbar-expand-lg position-sticky top-0 z-1 mb-3 bg-body-tertiary" data-bs-theme="dark">
                    <div className="container">
                        <h1 className='text-white'>Amar Zone</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav fw-semibold ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Active className="nav-link active me-4" aria-current="page" to="/">Home</Active>
                                </li>
                                <li className="nav-item">
                                    <Active className="nav-link active me-4" aria-current="page" to="/products">Products</Active>
                                </li>
                                <li className="nav-item position-relative">
                                    <Active className="nav-link active me-4" aria-current="page" to="/cart">Review Order
                                    </Active>
                                    {bdg > 0 && <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                        {bdg}
                                    </span>}
                                </li>
                                <li className="nav-item">
                                    <Active className="nav-link active me-4" aria-current="page" to="/about">About</Active>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {navigation.state === 'loading' && <Spinner></Spinner>}
                {navigation.state != 'loading' && <Outlet></Outlet>}
            </Contex.Provider>
        </>
    );
};

export default Header;
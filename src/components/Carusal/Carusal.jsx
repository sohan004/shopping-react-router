import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Typewriter, Cursor } from 'react-simple-typewriter';

const Carusal = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="d-flex my-auto  align-items-center flex-column-reverse flex-md-row">
                <div className='w-100 w-md-50'>
                    <p className='text-danger fw-semibold mb-0 shadow p-2 '>
                        <Typewriter
                            words={['sale up to 30% of']}
                            loop={false}
                            cursorStyle='|'
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        <span className='fw-light text-dark'>
                            <Cursor></Cursor>
                        </span>
                    </p>
                    <h1 className='display-4 fw-bolder'>Ai Eid E
                        <span className='text-success'>
                            <Typewriter
                                words={[' shopping hobe uradura', ' khela hobe', ' moja hobe', ' sobar sathe valobasa hobe']}
                                loop={false}
                                cursorStyle='|'
                                typeSpeed={150}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        <span className='fw-light'>
                            <Cursor></Cursor>
                        </span>
                    </h1>
                    <h5 className='fw-normal '>Discover all the new arrivals of ready-to-wear collection.
                        <div className='mt-3'>
                            <button onClick={() => navigate('/products')} className="btn btn-warning btn-lg fw-semibold rounded-0">Shooping Now</button>
                        </div>
                    </h5>
                </div>

                <div id="carouselExampleInterval" className="carousel w-100 w-md-50 slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="cr1.jpg" className="d-block w-100 img fluid" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="cr2.jpg" className="d-block w-100 img fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="cr3.jpg" className="d-block w-100 img fluid" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carusal;
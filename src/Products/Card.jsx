import React from 'react';
import './Card.css'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate()
    const { id, title, thumbnail, description, price } = props.p
    return (
        <>
            <div className="col-6 col-lg-4">
                <div onClick={()=>navigate(`/product/${id}`)} className="card  h-100 shadow" >
                    <img style={{height: '10rem'}} src={thumbnail} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h4 className="card-title fw-bolder">{title}</h4>
                        <div className='my-3'>
                            <p className='fw-bolder text-primary-emphasis bg-success d-inline p-1 rounded bg-opacity-25'>Price: ${price}</p>
                        </div>
                        <p>{description}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
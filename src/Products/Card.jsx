import React from 'react';
import './Card.css'

const Card = (props) => {
    const { id, img, name, price, seller, ratings } = props.p
    return (
        <>
            <div className="col-6 col-lg-4">
                <div className="card p-2 h-100 shadow" >
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title mb-4">{name}</h5>
                        <div className='d-flex justify-content-between align-items-center border-bottom border-2 pb-3'>
                            <h6>Seller: {seller}</h6>
                            <h6 className='price rounded-pill'>Price: ${price}</h6>
                        </div>
                        <div className='d-flex position-sticky mt-3 top-100 gap-3'>
                            <button onClick={() => props.setLocal(id, true)} className="btn btn-primary">Add cart</button>
                            <button onClick={() => props.setLocal(id, false)} className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
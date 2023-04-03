import React from 'react';
import './Item.css'

const CartItem = (props) => {
    const { id, name, img, price, quantity } = props.s
    return (
        <>
            <div className='mb-3 gap-3 d-flex justify-content-between align-items-center cart p-1 rounded'>
                <img src={img} className="img-fluid igg " alt="" />
                <p>{quantity}</p>
                <p>${price * quantity}</p>
                <div>
                    <button onClick={()=>props.dataSet(id, true)} className="btn btn-sm btn-primary">+</button>
                    <button onClick={()=>props.dataSet(id, false)} className="btn btn-sm btn-danger">-</button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
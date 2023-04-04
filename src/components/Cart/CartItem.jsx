import React from 'react';
import './Item.css'

const CartItem = (props) => {
    const { id, name, thumbnail, price, quant} = props.s
    return (
        <>
            <div className='mb-3 gap-3 d-flex justify-content-between align-items-center cart p-1 rounded'>
                <img src={thumbnail} className="img-fluid igg " alt="" />
                <p>{quant}</p>
                <p>${price * quant}</p>
                <div>
                    <button onClick={()=>props.dataSet(id, true)} className="btn btn-sm btn-primary">+</button>
                    <button onClick={()=>props.dataSet(id, false)} className="btn btn-sm btn-danger">-</button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
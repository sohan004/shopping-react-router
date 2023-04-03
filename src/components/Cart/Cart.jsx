import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { delet, getData, local } from '../../Utiliti';
import CartItem from './CartItem';

const Cart = () => {
    const apiData = useLoaderData()
    const [data, setData] = useState([])
    const [chk, setChk] = useState(0)

    const dataSet = (id, tf) => {
        tf ? local(id) : delet(id)
        setChk(chk > 10 ? 0 : chk + 1)
    }

    useEffect(() => {
        let newData = []
        const getD = getData()
        if (getD) {
            for (const id in getD) {
                let findD = apiData.find(fin => fin.id === id)
                findD.quantity = getD[id]
                newData.push(findD)
            }
        }
        setData(newData)
    }, [chk])



    let quantity = 0
    let totalPrice = 0
    let tax = 0
    let grandTotal = 0
    for (const singleProduct of data) {
        quantity += singleProduct.quantity
        totalPrice += singleProduct.quantity * singleProduct.price
    }
    tax = (totalPrice * 7) / 100
    grandTotal = tax + totalPrice

    const navigate = useNavigate()
    const orderPlace = () => {
        localStorage.removeItem('shopping-cart')
        navigate('/order_place')
    }

    return (
        <div className='container'>
            {data.length > 0 && <h3 className='text-center mb-4'>Item Add: {quantity}</h3>}
            {data.length === 0 && <h3 className='text-center mb-4 text-danger'>No Item Select!!!</h3>}
            {data.length === 0 && <div className='text-center'><button onClick={() => navigate('/')} className='btn btn-secondary'>Go Back</button></div>}

            {data.length > 0 && <div className='my-4 bg-light shadow-lg p-3 rounded-3'>
                <div className='d-flex mb-2 border-bottom border-2 justify-content-between'>
                    <h6>item.</h6>
                    <h6>Qn.</h6>
                    <h6>price</h6>
                    <h6>+-</h6>
                </div>
                <ol>{data.map(s => <CartItem dataSet={dataSet} key={s.id} s={s}></CartItem>)}</ol>
                <p>Total price: ${totalPrice}</p>
                <p>Tex: ${tax}</p>
                <h4 className='text-center gtotal'>Grand Total: ${grandTotal}</h4>
                <div className='text-center'>
                    <button onClick={orderPlace} className='btn btn-success '>Order Place</button>
                </div>
            </div>}

        </div>
    );
};

export default Cart;
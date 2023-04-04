import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { delet, getData, local } from '../../Utiliti';

const Cart = () => {
    const apiData = useLoaderData()
    const [data, setData] = useState([])
    const [chk, setChk] = useState(0)
    const newApi = apiData.products


    const dataSet = (id, tf) => {
        tf ? local(id) : delet(id)
        setChk(chk > 10 ? 0 : chk + 1)
    }

    useEffect(() => {
        let newData = []
        const getD = getData()
        if (getD) {
            for (const i in getD) {
                const singleData = newApi.find(g => parseFloat(g.id) === parseFloat(i))
                const quant = getD[i]
                const newSingle = { ...singleData, quant }
                newData.push(newSingle)
            }
        }
        setData(newData)
    }, [chk, newApi])


    let quantity = 0
    let totalPrice = 0
    let tax = 0
    let grandTotal = 0
    for (const singleProduct of data) {
        quantity += singleProduct.quant
        totalPrice += singleProduct.quant * singleProduct.price
    }
    tax = (totalPrice * 7) / 100
    grandTotal = tax + totalPrice

    const navigate = useNavigate()
    const orderPlace = (tf) => {
        localStorage.removeItem('shopping-cart')
        tf ? navigate('/order_place') : navigate('/products')
    }

    return (
        <div className='container'>
            {data.length > 0 && <h3 className='text-center mb-4'>Item Add: {quantity}</h3>}
            {data.length === 0 && <h3 className='text-center mb-4 text-danger'>No Item Select!!!</h3>}
            {data.length === 0 && <div className='text-center'><button onClick={() => navigate('/products')} className='btn btn-secondary'>Go Back</button></div>}

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
                    <button onClick={() => orderPlace(true)} className='btn btn-success me-3'>Order Place</button>
                    <button onClick={() => orderPlace(false)} className='btn btn-danger '>Cancel Order</button>

                </div>
            </div>}

        </div>
    );
};

export default Cart;
import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Card from './Card';
import { delet, local } from '../Utiliti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    const allProducts = useLoaderData()
    const navigate = useNavigate()
    const setLocal = (id, tf) => {
        local(id)
        if(!tf){
            navigate('/cart')
        }
        toast.success("Item aded succesfully",{
            position: toast.POSITION.TOP_CENTER
        })
    }
    return (
        <div className='container'>
            <div className="row g-1 g-md-4 ">
                {allProducts.map(p => <Card setLocal={setLocal} key={p.id} p={p}></Card>)}
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Products;
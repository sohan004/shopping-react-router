import React from 'react';
import {  useLoaderData  } from 'react-router-dom';
import Card from './Card';


const Products = () => {
    const allProducts = useLoaderData()
    const allP = allProducts.products
    return (
        <div className='container'>
            <div className="row g-1 g-md-4 ">
                {allP.map(p => <Card  key={p.id} p={p}></Card>)}
            </div>
        </div>
    );
};

export default Products;
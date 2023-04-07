import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Img from '../Img';
import { delet, local } from '../Utiliti';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Contex } from '../components/Header/Header';

const Single = () => {
    const [bdg, setBdg] = useContext(Contex)
    const { thumbnail, description, price, id, title, rating, stock, images } = useLoaderData()


    const navigate = useNavigate()
    const setLocal = (id, tf) => {
        local(id)
        if (!tf) {
            navigate('/cart')
        }
        toast.success("Item aded succesfully", {
            position: toast.POSITION.TOP_CENTER
        })
        setBdg(bdg + 1)
    }




    return (
        <div className='container'>
            <div className='d-flex align-items-center flex-column flex-md-row '>
                <div className='w-100 w-md-50'>
                    <img src={thumbnail} alt="" className="img-fluid" />
                </div>
                <div className='w-100 w-md-50'>
                    <h2 className='fw-bolder'>{title}</h2>
                    <h5 className=' my-4 text-success'>Price: ${price}</h5>
                    <p className='text-danger fw-semibold mb-1'>Ratings: {rating}</p>
                    <p className=' fw-semibold mb-4'>In Stock: {stock} pcs</p>
                    <button onClick={() => setLocal(id, true)} className="btn btn-warning fw-bolder me-3">Add Cart</button>
                    <button onClick={() => setLocal(id, false)} className="btn btn-success text-white fw-bolder">Buy Now</button>
                </div>
            </div>
            <div className='d-flex gap-3 my-3 flex-wrap'>
                {images.map((im, idx) => <Img key={idx} im={im}></Img>)}
            </div>
            <p className='mt-5'>{description}</p>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Single;
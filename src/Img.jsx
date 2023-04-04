import React from 'react';

const Img = (props) => {
    return (
        <>
            < img style={{width: '7rem'}} src={props.im} className='img-fluid shadow p-1 border' alt="" />
        </>
    );
};

export default Img;
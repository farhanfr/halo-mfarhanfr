import React from 'react';

const BasicCard = (props) =>{
    return(
        <>
        <img src={props.img} className='img-fluid' style={{borderRadius:'15px'}}/>
        <div style={{height:'10px'}}></div>
        <h6 className='text-center'>{props.title}</h6>
        </>
    )
}

export default BasicCard
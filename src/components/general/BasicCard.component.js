import React from 'react';

const BasicCard = (props) =>{
    return(
        <div className='shadow-sm border rounded'>
        <img src={props.img} className='img-fluid rounded'/>
        {/* <div style={{height:'10px'}}></div> */}
        {/* <h6 className='text-center font-weight-bold'>{props.title}</h6> */}
        </div>
    )
}

export default BasicCard
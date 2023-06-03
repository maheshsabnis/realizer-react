import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addProduct } from '../actions/actions';

const AddProductComponent = () => {

    const [product, setProduct] = useState({ProductId:0, ProductName:''});


  /* define an instance of dispatch so that the action can be dispatched */
  
  const dispatch= useDispatch();

  const save=()=>{
    /* Dispatch and pass data to it */
    dispatch(addProduct(product));
  };
  const clear=()=>{
    setProduct({ProductId:0, ProductName:''});
  };


  return (
    <div className='container'>
        <div className='form-group'>
          <label>Product Id</label>
          <input type="text" className='form-control'
           value={product.ProductId}
           onChange={(evt)=>setProduct({...product, ProductId:parseInt(evt.target.value)})}
           />
        </div> 
        <div className='form-group'>
          <label>Product Name</label>
          <input type="text" className='form-control'
           value={product.ProductName}
           onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
          />
        </div> 
        <div className='btn-group-lg'>
        <button className='btn btn-danger'
             onClick={clear}
            >Clear</button>
            <button className='btn btn-primary'
             onClick={save}
            >Add</button>
        </div>
    </div>
  )
}

export default AddProductComponent

import React from 'react'

const AddProductComponent = () => {
  return (
    <div className='container'>
        <div className='form-group'>
          <label>Product Id</label>
          <input type="text" className='form-control'/>
        </div> 
        <div className='form-group'>
          <label>Product Name</label>
          <input type="text" className='form-control'/>
        </div> 
        <div className='btn-group-lg'>
            <button className='btn btn-primary'>Add</button>
        </div>
    </div>
  )
}

export default AddProductComponent

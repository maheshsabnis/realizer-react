import React from 'react'
import AddProductComponent from './views/addproductcomponent'
import ListProductsComponent from './views/listproductcomponent'

const MainReduxComponent = () => {
  return (
    <div className='container'>
        <AddProductComponent></AddProductComponent>
        <hr/>
        <ListProductsComponent></ListProductsComponent>
    </div>
  )
}

export default MainReduxComponent

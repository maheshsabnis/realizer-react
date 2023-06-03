import React from 'react'
import AddProductComponent from './views/addproductcomponent'
import ListProductsComponent from './views/listproductcomponent'

/* Import useSelector to subscribe to the store */

import { useSelector } from 'react-redux'

const MainReduxComponent = () => {

    /* Subscribe to the store using the reducer name that is currently 
      monitoring the store (that name is present in the combineReducers())
    */

     let products = useSelector(state=>state.listProductsReducer); 

    

  return (
    <div className='container'>
        <AddProductComponent></AddProductComponent>
        <hr/>
        {/* Pass dta from store to the list */}
        <ListProductsComponent
          records={products}
        ></ListProductsComponent>
    </div>
  )
}

export default MainReduxComponent

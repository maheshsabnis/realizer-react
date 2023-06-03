 
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import LayoutComponent from './layoutcomponent';
import ListExpensesComponent from './listexpensescomponent';
import AddExpensesComponent from './addexpensescomponent';
import EditExpensesComponent from './editexpensescomponent';
/* In this component define the Route table */
const MainRoutingComponent = () => {
  return (
    <div className='container'>
      <Routes>
           {/* The Layout Component will be loaded */}
           <Route path='/' element={<LayoutComponent/>}>
               {/* Whrn the LayoutComponent is loaded
                 the ListExpensesComponent will be loaded
                 as index component
               */}
              <Route index element={<ListExpensesComponent/>}/>
              <Route path='/create' element={<AddExpensesComponent/>}/>
              {/* The Parameter4ized Route */}
              <Route path='/edit/:id' element={<EditExpensesComponent/>}/>
           </Route> 
           
      </Routes>
    </div>
  )
}

export default MainRoutingComponent;

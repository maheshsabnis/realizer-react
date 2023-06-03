import React from 'react'
import {Link, Outlet} from 'react-router-dom';

/* THis component will show UI containing Table that will be
  used to show links to query to router table
*/
const LayoutComponent = () => {
  return (
    <div className='container'>
        <h3>Routing App</h3>
       <table className='table table-dark table-bordered table-striped'>
          <thead>
            <tr>
            <th>
                <Link to='/'>List Expenses</Link>
            </th>
            <th>
                <Link to='/create'>Create Expense</Link>
            </th>
            </tr>
          </thead>
       </table>
       <hr/>
       {/* the Queried component using  Link will be loaded
          inside the Outlet
       */}
       <Outlet/>
    </div>
  )
}

export default LayoutComponent

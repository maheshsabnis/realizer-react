import React from 'react'

const ListProductsComponent = (props) => {

    console.log('====================================');
    console.log(JSON.stringify(props.records));
    console.log('====================================');
  if(props.records === undefined || props.records.length === 0) 
   return (<div className='alert alert-danger'>
       No data
   </div>);
   
  return (
    <div className='contaimer'>
        <table className='table table-bordered table-striped'>
             <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                </tr>
             </thead>
             <tbody>
                {
                    props.records.map((p,i)=>(
                        <tr key={i}>
                            <td>{p.ProductId}</td>
                            <td>{p.ProductName}</td>
                        </tr>
                    ))
                }
             </tbody>
        </table>
    </div>
  )
}

export default ListProductsComponent

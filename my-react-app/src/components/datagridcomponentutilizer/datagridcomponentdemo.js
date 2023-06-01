import React, { useState } from 'react'
import DataGridComponent from '../reusablecomponents/datagridcomponent';
const DataGridMainComponent = () => {


    const [record, setRecord] = useState({});

    const Employees = [
        {EmpNo:101,EmpName:'Mahesh'},
        {EmpNo:102,EmpName:'Ramesh'},
        {EmpNo:103,EmpName:'Ram'}
    ];

   // const Employees = undefined;

   //const Employees = [{}];

    const Products = [
      {ProductId:"Prod-1001", ProductName:'Laptop', Proce:10000},
      {ProductId:"Prod-1002", ProductName:'RAM', Proce:8000},
      {ProductId:"Prod-1003", ProductName:'SSD', Proce:9000},
      {ProductId:"Prod-1004", ProductName:'Printer', Proce:3000},
    ];

  return (
    <div className='container'>
       <DataGridComponent dataSource={Employees}
         CanEdit={true}
         onRowSelection={(rec)=>setRecord(rec)} 
         ></DataGridComponent>
         <hr/>
         Selected Record {
            JSON.stringify(record)
         }
       <hr/>
       <DataGridComponent dataSource={Products}></DataGridComponent>
    </div>
  )
}

export default DataGridMainComponent;

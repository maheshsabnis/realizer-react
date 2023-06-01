import React, { useState } from 'react'
import DataGridComponent from '../reusablecomponents/datagridcomponent';
const DataGridMainComponent = () => {


    const [record, setRecord] = useState({});
    const [emp,setEmp] = useState({
        EmpNo:0, EmpName:''
    })

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
        <input type="text" value={emp.EmpNo} 
          onChange={(evt)=> setEmp({...emp, EmpNo:parseInt(evt.target.value)})}/>
        <br/>
        <input type="text" value={emp.EmpName} 
         onChange={(evt)=>setEmp({...emp, EmpName:evt.target.value})}
        />
        
       <DataGridComponent dataSource={Employees}
         CanEdit={true}
         onRowSelection={(rec)=>setEmp(rec)} 
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

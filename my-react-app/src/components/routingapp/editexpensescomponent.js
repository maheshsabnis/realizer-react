import React, { useState, useEffect } from 'react'
import { ExpensesHttpService } from '../../services/expenseshttpservice';
import SelectComponent from '../reusablecomponents/selectcomponent';
import {Expenses, ExpensesTypes,ExpensesSubTypes, PaymentModes} from '../../models/expenses';

/* useParams: used for reading route parameters */
import {useNavigate, useParams} from 'react-router-dom';



const EditExpensesComponent = () => {
    const [expense, setExpense] = useState({
        ExpenseId:0,PaidTo:'',PaidAmount:0,
        ExpensesType:'',ExpensesSubType:'',
        PaymentMode:'',Perticulars:'',
        PaymentDate:new Date()
    });

    const serv = new ExpensesHttpService();


    // define instances for useNavigate and useParams

    const navigateTo = useNavigate();
    const params = useParams();

    // Make Http call to the REST API to fetch data to be updated

    useEffect(()=>{
        // read th id from route parameter
        let id = params.id; 
       
        serv.getExpensesbyid(id)
            .then((response)=>{
                alert(JSON.stringify(response.data));
                setExpense(response.data);
            })
            .catch((error)=>{
                console.log(`Error occurred ${error}`);    
            });
    },[]);



    const clear =()=>{
        // Reset the expense object to initial values
        setExpense({
            ExpenseId:0,PaidTo:'',PaidAmount:0,
            ExpensesType:'',ExpensesSubType:'',
            PaymentMode:'',Perticulars:'',
            PaymentDate:new Date()
        });
        // upon cancel go back to tyhe List
        navigateTo("/");
    };
    const saveExpense = ()=>{
        serv.putExpense(expense.ExpenseId, expense)
            .then((response)=>{
               
        navigateTo("/");
            })
            .catch((error)=>{
               console.log(`Error occurred ${error}`);
           });
   };
  return (
    <div className='container'>
       <div className='form-control'>
                <label>Expense Id:</label>
                <input type='text' className='form-control'
                 value={expense.ExpenseId}
                 onChange={(evt)=>setExpense({...expense, ExpenseId:parseInt(evt.target.value)})}
                 />
            </div>
            <div className='form-control'>
                <label>Paid To:</label>
                <input type='text' className='form-control'
                   value={expense.PaidTo}
                   onChange={(evt)=>setExpense({...expense, PaidTo:evt.target.value})}/>
            </div>
            <div className='form-control'>
                <label>Paid Amount:</label>
                <input type='text' className='form-control'
                   value={expense.PaidAmount}
                   onChange={(evt)=>setExpense({...expense, PaidAmount:evt.target.value})}/>
            </div>
            <div className='form-control'>
                <label>Expense Type:</label>
                 <SelectComponent
                 bindableProperty={expense.ExpensesType}
                 dataSource={ExpensesTypes}
                 onSelectionChanged={(value)=>setExpense({...expense, ExpensesType:value})}
                 ></SelectComponent>
            </div>
            <div className='form-control'>
                <label>Expense Sub Type:</label>
                <SelectComponent
                bindableProperty={expense.ExpensesSubType}
                 dataSource={ExpensesSubTypes}
                 onSelectionChanged={(value)=>setExpense({...expense, ExpensesSubType:value})}
                 ></SelectComponent>
            </div>
            <div className='form-control'>
                <label>Payment Mode:</label>
                <SelectComponent
                bindableProperty={expense.PaymentMode}
                 dataSource={PaymentModes}
                 onSelectionChanged={(value)=>setExpense({...expense, PaymentMode:value})}
                 ></SelectComponent>
            </div>
            <div className='form-control'>
                <label>Perticulars:</label>
                 <textarea className='form-control'
                   value={expense.Perticulars}
                   onChange={(evt)=>setExpense({...expense, Perticulars:evt.target.value})}
                 ></textarea> 
            </div>
            <div className='form-control'>
                <label>Payment  Date:</label>
                 <input type="date" className='form-control'
                   value={expense.PaymentDate}
                   onChange={(evt)=>setExpense({...expense, PaymentDate:evt.target.value})}
                 />
            </div>
            <div className='form-control'>
                <button className='btn btn-warning'
                 onClick={clear}
                >Clear</button>
                <button className='btn btn-success'
                onClick={saveExpense}
                >Save</button>
                 
            </div>
    </div>
  )
}

export default EditExpensesComponent;

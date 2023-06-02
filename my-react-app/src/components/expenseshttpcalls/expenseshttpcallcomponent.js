import {useState, useEffect} from 'react';

import {Expenses, ExpensesTypes,ExpensesSubTypes, PaymentModes} from '../../models/expenses';
import SelectComponent from '../reusablecomponents/selectcomponent';
 
import DataGridComponent from '../reusablecomponents/datagridcomponent';

import { ExpensesHttpService } from '../../services/expenseshttpservice';

const ExpensesHttpCallComponent=()=>{
 // Call to External API

    // 1. define state
    const [expense, setExpense] = useState({
        ExpenseId:0,PaidTo:'',PaidAmount:0,
        ExpensesType:'',ExpensesSubType:'',
        PaymentMode:'',Perticulars:'',
        PaymentDate:new Date()
    });
    // EMpty State Array
    const [expenses, setExpenses] = useState([]);
    const [headers,setHeaders] = useState([]);

    const serv = new ExpensesHttpService();

    // use useEffect() to load properties from the 'expense' object into the 'headers' array

    useEffect(()=>{
        // read all properties of expense object
        setHeaders(Object.keys(expense));
        serv.getExpenses()
            .then((response)=>{
                // mutate the response data in expenses array
                setExpenses(response.data);
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
    };
    const saveExpense = ()=>{
         serv.postExpense(expense)
             .then((response)=>{
                console.log(`Data Added Successfully`);
                setExpenses([...expenses,response.data]);
             })
             .catch((error)=>{
                console.log(`Error occurred ${error}`);
            });
    };
    const updateExpense = ()=>{
        serv.putExpense(expense.ExpenseId, expense)
            .then((response)=>{
               console.log(`Data updated Successfully`);
                
            })
            .catch((error)=>{
               console.log(`Error occurred ${error}`);
           });
   };
    return (
        <div className='container'>
            <h1>Http Calls</h1>  
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
                 <button className='btn btn-warning'
                onClick={updateExpense}
                >Update</button>
            </div>
            <br/>
            
            

            <DataGridComponent dataSource={expenses} CanEdit={true}
             onRowSelection={(rec)=>setExpense(rec)}
            ></DataGridComponent>    


        </div>
    );
};

export default ExpensesHttpCallComponent;
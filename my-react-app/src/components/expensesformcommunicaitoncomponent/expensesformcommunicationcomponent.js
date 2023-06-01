import {useState, useEffect} from 'react';

import {Expenses, ExpensesTypes,ExpensesSubTypes, PaymentModes} from '../../models/expenses';
import SelectComponent from '../reusablecomponents/selectcomponent';
import { Button } from 'bootstrap';

const ExpensesFormCommunicationComponent=()=>{
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


    // use useEffect() to load properties from the 'expense' object into the 'headers' array

    useEffect(()=>{
        // read all properties of expense object
        setHeaders(Object.keys(expense));
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
        // Mutate an arrey by adding new expenses record in it 
        setExpenses([...expenses, expense]);
    };
    return (
        <div className='container'>
            <h1>Parent Child</h1>  
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
            <br/>
            <span>
                {
                    JSON.stringify(expenses)
                }
            </span>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {
                            headers.map((col,index)=>(
                                <th key={index}>{col}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((exp,idx)=>(
                            <tr key={idx}>
                                 {
                                    headers.map((col,i)=>(
                                        <td key={i}>{exp[col]}</td>
                                        
                                    ))
                                    
                                 }
                                 <td>
                                            <button>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ExpensesFormCommunicationComponent;
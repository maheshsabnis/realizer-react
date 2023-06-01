import {useState} from 'react';

import {Expenses, ExpensesTypes,ExpensesSubTypes, PaymentModes} from '../../models/expenses';

const ExpensesFormComponent=()=>{
    // 1. define state
    const [expense, setExpense] = useState({
        ExpenseId:0,PaidTo:'',PaidAmount:0,
        ExpensesType:'',ExpensesSubType:'',
        PaymentMode:'',Perticulars:'',
        PaymentDate:new Date()
    });
    // EMpty State Array
    const [expenses, setExpenses] = useState([]);

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
                <label>Expense Type:</label>
                <select className='form-control'
                  value={expense.ExpensesType}
                  onChange={(evt)=>setExpense({...expense, ExpensesType:evt.target.value})}
                >
                     {
                        ExpensesTypes.map((exType,idx)=>(
                            <option key={idx} value={exType}>{exType}</option>
                        ))
                     }
                    </select> 
            </div>
            <div className='form-control'>
                <label>Expense Sub Type:</label>
                <select className='form-control'
                  value={expense.ExpensesSubType}
                  onChange={(evt)=>setExpense({...expense, ExpensesSubType:evt.target.value})}
                >
                    {
                        ExpensesSubTypes.map((exSubType,idx)=>(
                            <option key={idx} value={exSubType}>{exSubType}</option>
                        ))
                     }
                    </select> 
            </div>
            <div className='form-control'>
                <label>Payment Mode:</label>
                <select className='form-control'
                  value={expense.PaymentMode}
                  onChange={(evt)=>setExpense({...expense, PaymentMode:evt.target.value})}
                >{
                    PaymentModes.map((payMode,idx)=>(
                        <option key={idx} value={payMode}>{payMode}</option>
                    ))
                 }
                    </select> 
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
            {/* <span>
                {
                    JSON.stringify(expenses)
                }
            </span> */}
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Expenses Id</th>
                        <th>Paid To</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((exp,idx)=>(
                            <tr>
                                <td>{exp.ExpenseId}</td>
                                <td>{exp.PaidTo}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ExpensesFormComponent;
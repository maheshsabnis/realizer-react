import {useState} from 'react';

import {Expenses, ExpensesTypes,ExpensesSubTypes} from './../../models/expenses';

const ExpensesFormComponent=()=>{
    // 1. define state
    const [expense, setExpense] = useState({
        ExpenseId:0,PaidTo:'',PaidAmount:0,
        ExpensesType:'',ExpensesSubType:'',
        PaymentMode:'',Perticulars:'',
        PaymentDate:new Date()
    });

    return ();
};

export default ExpensesFormComponent;
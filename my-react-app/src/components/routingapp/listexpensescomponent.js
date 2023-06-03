import React, {useState,useEffect} from 'react'
import { ExpensesHttpService } from '../../services/expenseshttpservice';
import { Link } from 'react-router-dom';
 

const ListExpensesComponent = () => {

    const [expenses, setExpenses] = useState([]);
    const [headers,setHeaders] = useState([]);

    const serv = new ExpensesHttpService();

    

    useEffect(()=>{
        serv.getExpenses()
            .then((response)=>{
                // mutate the response data in expenses array
                setExpenses(response.data);
            })
            .catch((error)=>{
                console.log(`Error occurred ${error}`);
            });
    },[]);

  return (
    <div className='container'>
       <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Expenses Id</th>
                        <th>Paid To</th>
                        <th>PaidAmount</th>
                        <th>ExpensesType</th>
                        <th>ExpensesSubType</th>
                        <th>PaymentMode</th>
                        <th>Perticulars</th>
                        <th>PaymentDate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((exp,idx)=>(
                            <tr key={idx}>
                                <td>{exp.ExpenseId}</td>
                                <td>{exp.PaidTo}</td>
                                <td>{exp.PaidAmount}</td>
                                <td>{exp.ExpensesType}</td>
                                <td>{exp.ExpensesSubType}</td>
                                <td>{exp.PaymentMode}</td>
                                <td>{exp.Perticulars}</td>
                                <td>{exp.PaymentDate}</td>
                                <td>
                                    <Link to={`/edit/${exp.ExpenseId}`}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ListExpensesComponent;

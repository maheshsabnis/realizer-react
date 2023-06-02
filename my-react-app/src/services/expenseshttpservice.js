import axios from 'axios';
export class ExpensesHttpService {
    constructor(){
        this.url = 'https://localhost:7115/api/HomeExpensesAPI';
    }


    getExpenses() {
        let response = axios.get(this.url);
        return response;
    }
    getExpensesbyid(id) {
        let response = axios.get(`${this.url}/${id}`);
        return response;
    }

    postExpense(expense){
        let response = axios.post(this.url, expense, {
            headers:{
                'Content-Type':'application/json' 
            }
        });
        return response;
    }

    putExpense(id,expense){
        let response = axios.put(`${this.url}/${id}`, expense, {
            headers:{
                'Content-Type':'application/json' 
            }
        });
        return response;
    }

    deleteExpense(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}
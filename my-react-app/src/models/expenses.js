export const ExpensesTypes = ['Food', 'Entertainment', 'Fuel', 'Travel', 'Leisure', 'Education', 'Loan', 'HouseHold'];

// export const ExpensesTypes = undefined;

export const ExpensesSubTypes = [
    'Dairy', 'Hotel', 'Petrol', 'Diesel', 'Gas', 'Taxi', 'Auto', 'Bus', 'Train', 'Flight', 'Movies', 'Books', 'OTT', 'Collage', 'Book', 'Auto-Loan', 'Home-Loan', 'Maid', 'Cleanining Work'
];

export const PaymentModes = [
    'Cash', 'Bank Transfer', 'Cheque', 'PayTM', 'Pe', 'gPay', 'UPI'
];

export class Expenses {
  // COnstructor with Public Properties  
  constructor(){
    this.ExpenseId = 0;
    this.PaidTo = '';
    this.PaidAmount = 0;
    this.ExpensesType = '';
    this.ExpensesSubType = '';
    this.PaymentMode = ''
    this.Perticulars = '';
    this.PaymentDate = new Date(); 
  }
}


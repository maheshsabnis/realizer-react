using System;
using System.Collections.Generic;

namespace ExpensesAPI.Models;

public partial class HomeExpense
{
    public int ExpenseId { get; set; }

    public string PaidTo { get; set; } = null!;

    public int PaidAmount { get; set; }

    public string ExpensesType { get; set; } = null!;

    public string ExpensesSubType { get; set; } = null!;

    public string PaymentMode { get; set; } = null!;

    public string Perticulars { get; set; } = null!;

    public DateTime PaymentDate { get; set; }
}

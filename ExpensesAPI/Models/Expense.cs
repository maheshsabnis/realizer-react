using System;
using System.Collections.Generic;

namespace ExpensesAPI.Models;

public partial class Expense
{
    public int ExpensesId { get; set; }

    public string ExpensesDetails { get; set; } = null!;

    public string PaidTo { get; set; } = null!;

    public int PaidAmount { get; set; }

    public string ExpensesHeader { get; set; } = null!;

    public string PaymentMode { get; set; } = null!;
}

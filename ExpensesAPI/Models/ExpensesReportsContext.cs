using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ExpensesAPI.Models;

public partial class ExpensesReportsContext : DbContext
{
    public ExpensesReportsContext()
    {
    }

    public ExpensesReportsContext(DbContextOptions<ExpensesReportsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Expense> Expenses { get; set; }

    public virtual DbSet<HomeExpense> HomeExpenses { get; set; }

   // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//        => optionsBuilder.UseSqlServer("Data Source=127.0.0.1;Initial Catalog=ExpensesReports;User Id=sa;Password=MyPass@word;TrustServerCertificate=Yes");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Expense>(entity =>
        {
            entity.HasKey(e => e.ExpensesId).HasName("PK__Expenses__DFC8A05C874AB8E0");

            entity.Property(e => e.ExpensesDetails)
                .HasMaxLength(1000)
                .IsUnicode(false);
            entity.Property(e => e.ExpensesHeader)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.PaidTo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.PaymentMode)
                .HasMaxLength(200)
                .IsUnicode(false);
        });

        modelBuilder.Entity<HomeExpense>(entity =>
        {
            entity.HasKey(e => e.ExpenseId).HasName("PK__HomeExpe__1445CFD38023F40B");

            entity.Property(e => e.ExpenseId).ValueGeneratedNever();
            entity.Property(e => e.ExpensesSubType)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.ExpensesType)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.PaidTo)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.PaymentDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("date");
            entity.Property(e => e.PaymentMode)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Perticulars)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

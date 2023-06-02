using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExpensesAPI.Models;

namespace ExpensesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeExpensesAPI : ControllerBase
    {
        private readonly ExpensesReportsContext _context;

        public HomeExpensesAPI(ExpensesReportsContext context)
        {
            _context = context;
        }

        // GET: api/HomeExpensesAPI
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HomeExpense>>> GetHomeExpenses()
        {
          if (_context.HomeExpenses == null)
          {
              return NotFound();
          }
            return await _context.HomeExpenses.ToListAsync();
        }

        // GET: api/HomeExpensesAPI/5
        [HttpGet("{id}")]
        public async Task<ActionResult<HomeExpense>> GetHomeExpense(int id)
        {
          if (_context.HomeExpenses == null)
          {
              return NotFound();
          }
            var homeExpense = await _context.HomeExpenses.FindAsync(id);

            if (homeExpense == null)
            {
                return NotFound();
            }

            return homeExpense;
        }

        // PUT: api/HomeExpensesAPI/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutHomeExpense(int id, HomeExpense homeExpense)
        {
            if (id != homeExpense.ExpenseId)
            {
                return BadRequest();
            }

            _context.Entry(homeExpense).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HomeExpenseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/HomeExpensesAPI
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<HomeExpense>> PostHomeExpense(HomeExpense homeExpense)
        {
          if (_context.HomeExpenses == null)
          {
              return Problem("Entity set 'ExpensesReportsContext.HomeExpenses'  is null.");
          }
            _context.HomeExpenses.Add(homeExpense);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (HomeExpenseExists(homeExpense.ExpenseId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetHomeExpense", new { id = homeExpense.ExpenseId }, homeExpense);
        }

        // DELETE: api/HomeExpensesAPI/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHomeExpense(int id)
        {
            if (_context.HomeExpenses == null)
            {
                return NotFound();
            }
            var homeExpense = await _context.HomeExpenses.FindAsync(id);
            if (homeExpense == null)
            {
                return NotFound();
            }

            _context.HomeExpenses.Remove(homeExpense);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HomeExpenseExists(int id)
        {
            return (_context.HomeExpenses?.Any(e => e.ExpenseId == id)).GetValueOrDefault();
        }
    }
}

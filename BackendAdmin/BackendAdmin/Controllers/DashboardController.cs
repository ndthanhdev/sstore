using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackendAdmin.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendAdmin.Controllers
{
    [Produces("application/json")]
    [Route("api/Dashboard")]
    public class DashboardController : Controller
    {
        private readonly SStoreContext _context;

        public DashboardController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/Dashboard/NoUsers
        [HttpGet("NoUsers")]
        public long GetNoUsers()
        {
            return _context.Users.Count();
        }

        // GET: api/Dashboard/NoReaminingOrders
        [HttpGet("NoReaminingOrders")]
        public long GetNoReaminingOrders()
        {
            return _context.Orders.Where(order => order.State == 0 || order.State == 1).Count();
        }

        // GET: api/Dashboard/NoBadReviews
        [HttpGet("NoBadReviews")]
        public long GetNoBadReviews()
        {
            return _context.Reviews.Where(review => review.Rating < 3).Count();
        }

        // GET: api/Dashboard/TodaySales
        [HttpGet("TodaySales")]
        public object GetTodaySales()
        {
            // get this time yesterday
            var yesterday = DateTime.Today - TimeSpan.FromDays(1);

            // get previous hour
            long span = TimeSpan.FromHours(1).Ticks;
            long ticks = DateTime.Now.Ticks / span;
            var currentHour = new DateTime(ticks * span);

            var todayInvoices = _context.Invoices
                .Where(invoice => invoice.CreatedAt > yesterday && invoice.CreatedAt <= currentHour)
                .Include(invoice => invoice.Order.ShoppingCart.ShoppingCartDetails);

            return null;
        }

        // GET: api/Dashboard/ReviewPercents
        [HttpGet("ReviewPercents")]
        public IEnumerable<object> GetReviewPercents()
        {
            var reviews = _context.Reviews.GroupBy(review => review.Rating).Select(group => new[]
            {
                group.Key,
                group.Count()
            });

            return reviews;
        }
    }
}
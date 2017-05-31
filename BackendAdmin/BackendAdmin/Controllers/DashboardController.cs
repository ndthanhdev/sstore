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

        // GET: api/Dashboard/MonthSales
        [HttpGet("MonthSales")]
        public object GetMonthSales()
        {
            DateTime present = DateTime.Today;

            //1 month ago
            var pastTicks = present.AddMonths(-1);

            var monthSales = _context.Invoices
                .Where(invoice => invoice.CreatedAt > pastTicks && invoice.CreatedAt <= present)
                .Include(invoice => invoice.Order.ShoppingCart.ShoppingCartDetails)
                .OrderBy(invoice=>invoice.CreatedAt)
                .GroupBy(invoice => invoice.CreatedAt.Value.ToString("d"))
                .Select(group => new object[]
                {
                    group.Key,
                    group.Sum(invoice=>invoice.Order.ShoppingCart.ShoppingCartDetails.Sum(scd=>scd.Quantity))
                });

            return monthSales;
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

        // GET: api/Dashboard/RecentUsers
        [HttpGet("RecentUsers")]
        public IEnumerable<object> GetRecentUsers()
        {
            DateTime now = DateTime.Now;

            // get this time floor hour
            var present = new DateTime(now.Year, now.Month, 1);
            var presentTicks = present.Ticks;

            //get this time 6 month floor hour
            var pastTicks = present.AddMonths(-6).Ticks;

            var recentUsers = _context.Users
                .Where(user => user.CreatedAt.Value.Ticks > pastTicks
                    && user.CreatedAt.Value.Ticks <= presentTicks)
                .OrderBy(user => user.CreatedAt.Value)
                .GroupBy(user => user.CreatedAt.Value.ToString("MMM"))
                .Select(group => new object[]
                {
                    group.Key,
                    group.Count()
                });

            return recentUsers;
        }
    }
}
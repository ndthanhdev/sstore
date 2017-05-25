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
            // this time yesterday
            var yesterday = DateTime.Today - TimeSpan.FromDays(1);

            var todayInvoices = _context.Invoices
                .Where(invoice => invoice.CreatedAt > yesterday)
                .Include(invoice=>invoice.Order.ShoppingCart.ShoppingCartDetails.)
                .Collection();
                
            return null;
        }
    }
}
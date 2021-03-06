using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAdmin.Models;
using BackendAdmin.Controllers.Helper;

namespace BackendAdmin.Controllers
{
    [Produces("application/json")]
    [Route("api/Orders")]
    public class OrdersController : Controller
    {
        private readonly SStoreContext _context;

        public OrdersController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/Orders/All
        [HttpGet("/All")]
        public IEnumerable<Orders> GetOrders()
        {
            return _context.Orders;
        }

        // GET: api/Orders?page=1
        [HttpGet]
        public async Task<PaginatedList<Orders>> GetProducts(int page = 1, int size = 10)
        {
            var source = _context.Orders
                .Include(order => order.ShoppingCart.User)
                .OrderByDescending(order => order.UpdatedAt);
            return await PaginatedList<Orders>.CreateAsync(source, page, size);
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrders([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orders = await _context.Orders
                .Include(order => order.ShoppingCart)
                .ThenInclude(shoppingCart => shoppingCart.ShoppingCartDetails)
                .ThenInclude(shoppingCartDetail => shoppingCartDetail.StoreProductVariant)
                .ThenInclude(storePorductVariant => storePorductVariant.ProductVariant)
                .ThenInclude(productVariant => productVariant.ProductVariationValues)
                .Include(order => order.ShoppingCart)
                .ThenInclude(shoppingCart => shoppingCart.ShoppingCartDetails)
                .ThenInclude(shoppingCartDetail => shoppingCartDetail.StoreProductVariant.ProductVariant.Product)
                .SingleOrDefaultAsync(m => m.Id == id);

            if (orders == null)
            {
                return NotFound();
            }

            return Ok(orders);
        }

        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrders([FromRoute] long id, [FromBody] Orders orders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != orders.Id)
            {
                return BadRequest();
            }

            _context.Entry(orders).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdersExists(id))
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

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> PostOrders([FromBody] Orders orders)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Orders.Add(orders);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrders", new { id = orders.Id }, orders);
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrders([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var orders = await _context.Orders.SingleOrDefaultAsync(m => m.Id == id);
            if (orders == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(orders);
            await _context.SaveChangesAsync();

            return Ok(orders);
        }

        private bool OrdersExists(long id)
        {
            return _context.Orders.Any(e => e.Id == id);
        }
    }
}
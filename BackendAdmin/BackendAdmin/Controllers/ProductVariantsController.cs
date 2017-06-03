using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAdmin.Models;

namespace BackendAdmin.Controllers
{
    [Produces("application/json")]
    [Route("api/ProductVariants")]
    public class ProductVariantsController : Controller
    {
        private readonly SStoreContext _context;

        public ProductVariantsController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/ProductVariants
        [HttpGet]
        public IEnumerable<ProductVariants> GetProductVariants()
        {
            return _context.ProductVariants;
        }

        // GET: api/ProductVariants/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductVariants([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productVariants = await _context.ProductVariants.SingleOrDefaultAsync(m => m.Id == id);

            if (productVariants == null)
            {
                return NotFound();
            }

            return Ok(productVariants);
        }

        // PUT: api/ProductVariants/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductVariants([FromRoute] int id, [FromBody] ProductVariants productVariants)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productVariants.Id)
            {
                return BadRequest();
            }

            _context.Entry(productVariants).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductVariantsExists(id))
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

        // POST: api/ProductVariants
        [HttpPost]
        public async Task<IActionResult> PostProductVariants([FromBody] ProductVariants productVariants)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductVariants.Add(productVariants);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductVariants", new { id = productVariants.Id }, productVariants);
        }

        // DELETE: api/ProductVariants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductVariants([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productVariants = await _context.ProductVariants.SingleOrDefaultAsync(m => m.Id == id);
            if (productVariants == null)
            {
                return NotFound();
            }

            _context.ProductVariants.Remove(productVariants);
            await _context.SaveChangesAsync();

            return Ok(productVariants);
        }

        private bool ProductVariantsExists(int id)
        {
            return _context.ProductVariants.Any(e => e.Id == id);
        }
    }
}
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
    [Route("api/ProductVariationValues")]
    public class ProductVariationValuesController : Controller
    {
        private readonly SStoreContext _context;

        public ProductVariationValuesController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/ProductVariationValues
        [HttpGet]
        public IEnumerable<ProductVariationValues> GetProductVariationValues()
        {
            return _context.ProductVariationValues;
        }

        // GET: api/ProductVariationValues/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductVariationValues([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productVariationValues = await _context.ProductVariationValues.SingleOrDefaultAsync(m => m.Id == id);

            if (productVariationValues == null)
            {
                return NotFound();
            }

            return Ok(productVariationValues);
        }

        // PUT: api/ProductVariationValues/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductVariationValues([FromRoute] int id, [FromBody] ProductVariationValues productVariationValues)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productVariationValues.Id)
            {
                return BadRequest();
            }

            _context.Entry(productVariationValues).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductVariationValuesExists(id))
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

        // POST: api/ProductVariationValues
        [HttpPost]
        public async Task<IActionResult> PostProductVariationValues([FromBody] ProductVariationValues productVariationValues)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductVariationValues.Add(productVariationValues);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductVariationValues", new { id = productVariationValues.Id }, productVariationValues);
        }

        // DELETE: api/ProductVariationValues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductVariationValues([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productVariationValues = await _context.ProductVariationValues.SingleOrDefaultAsync(m => m.Id == id);
            if (productVariationValues == null)
            {
                return NotFound();
            }

            _context.ProductVariationValues.Remove(productVariationValues);
            await _context.SaveChangesAsync();

            return Ok(productVariationValues);
        }

        private bool ProductVariationValuesExists(int id)
        {
            return _context.ProductVariationValues.Any(e => e.Id == id);
        }
    }
}
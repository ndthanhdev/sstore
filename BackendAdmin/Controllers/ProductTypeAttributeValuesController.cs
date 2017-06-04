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
    [Route("api/ProductTypeAttributeValues")]
    public class ProductTypeAttributeValuesController : Controller
    {
        private readonly SStoreContext _context;

        public ProductTypeAttributeValuesController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/ProductTypeAttributeValues
        [HttpGet]
        public IEnumerable<ProductTypeAttributeValues> GetProductTypeAttributeValues()
        {
            return _context.ProductTypeAttributeValues;
        }

        // GET: api/ProductTypeAttributeValues/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductTypeAttributeValues([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productTypeAttributeValues = await _context.ProductTypeAttributeValues.SingleOrDefaultAsync(m => m.Id == id);

            if (productTypeAttributeValues == null)
            {
                return NotFound();
            }

            return Ok(productTypeAttributeValues);
        }

        // PUT: api/ProductTypeAttributeValues/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductTypeAttributeValues([FromRoute] int id, [FromBody] ProductTypeAttributeValues productTypeAttributeValues)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productTypeAttributeValues.Id)
            {
                return BadRequest();
            }

            _context.Entry(productTypeAttributeValues).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductTypeAttributeValuesExists(id))
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

        // POST: api/ProductTypeAttributeValues
        [HttpPost]
        public async Task<IActionResult> PostProductTypeAttributeValues([FromBody] ProductTypeAttributeValues productTypeAttributeValues)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ProductTypeAttributeValues.Add(productTypeAttributeValues);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductTypeAttributeValues", new { id = productTypeAttributeValues.Id }, productTypeAttributeValues);
        }

        // DELETE: api/ProductTypeAttributeValues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductTypeAttributeValues([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var productTypeAttributeValues = await _context.ProductTypeAttributeValues.SingleOrDefaultAsync(m => m.Id == id);
            if (productTypeAttributeValues == null)
            {
                return NotFound();
            }

            _context.ProductTypeAttributeValues.Remove(productTypeAttributeValues);
            await _context.SaveChangesAsync();

            return Ok(productTypeAttributeValues);
        }

        private bool ProductTypeAttributeValuesExists(int id)
        {
            return _context.ProductTypeAttributeValues.Any(e => e.Id == id);
        }
    }
}
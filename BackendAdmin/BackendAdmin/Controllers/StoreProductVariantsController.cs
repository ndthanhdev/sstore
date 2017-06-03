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
    [Route("api/StoreProductVariants")]
    public class StoreProductVariantsController : Controller
    {
        private readonly SStoreContext _context;

        public StoreProductVariantsController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/StoreProductVariants
        [HttpGet]
        public IEnumerable<StoreProductVariant> GetStoreProductVariant()
        {
            return _context.StoreProductVariant;
        }

        // GET: api/StoreProductVariants/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStoreProductVariant([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var storeProductVariant = await _context.StoreProductVariant.SingleOrDefaultAsync(m => m.Id == id);

            if (storeProductVariant == null)
            {
                return NotFound();
            }

            return Ok(storeProductVariant);
        }

        // PUT: api/StoreProductVariants/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStoreProductVariant([FromRoute] int id, [FromBody] StoreProductVariant storeProductVariant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != storeProductVariant.Id)
            {
                return BadRequest();
            }

            _context.Entry(storeProductVariant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoreProductVariantExists(id))
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

        // POST: api/StoreProductVariants
        [HttpPost]
        public async Task<IActionResult> PostStoreProductVariant([FromBody] StoreProductVariant storeProductVariant)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.StoreProductVariant.Add(storeProductVariant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoreProductVariant", new { id = storeProductVariant.Id }, storeProductVariant);
        }

        // DELETE: api/StoreProductVariants/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStoreProductVariant([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var storeProductVariant = await _context.StoreProductVariant.SingleOrDefaultAsync(m => m.Id == id);
            if (storeProductVariant == null)
            {
                return NotFound();
            }

            _context.StoreProductVariant.Remove(storeProductVariant);
            await _context.SaveChangesAsync();

            return Ok(storeProductVariant);
        }

        private bool StoreProductVariantExists(int id)
        {
            return _context.StoreProductVariant.Any(e => e.Id == id);
        }
    }
}
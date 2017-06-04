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
    [Route("api/CustomAttributes")]
    public class CustomAttributesController : Controller
    {
        private readonly SStoreContext _context;

        public CustomAttributesController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/CustomAttributes
        [HttpGet]
        public IEnumerable<CustomAttributes> GetCustomAttributes()
        {
            return _context.CustomAttributes;
        }

        // GET: api/CustomAttributes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomAttributes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customAttributes = await _context.CustomAttributes.SingleOrDefaultAsync(m => m.Id == id);

            if (customAttributes == null)
            {
                return NotFound();
            }

            return Ok(customAttributes);
        }

        // PUT: api/CustomAttributes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomAttributes([FromRoute] int id, [FromBody] CustomAttributes customAttributes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != customAttributes.Id)
            {
                return BadRequest();
            }

            _context.Entry(customAttributes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomAttributesExists(id))
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

        // POST: api/CustomAttributes
        [HttpPost]
        public async Task<IActionResult> PostCustomAttributes([FromBody] CustomAttributes customAttributes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CustomAttributes.Add(customAttributes);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomAttributes", new { id = customAttributes.Id }, customAttributes);
        }

        // DELETE: api/CustomAttributes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomAttributes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customAttributes = await _context.CustomAttributes.SingleOrDefaultAsync(m => m.Id == id);
            if (customAttributes == null)
            {
                return NotFound();
            }

            _context.CustomAttributes.Remove(customAttributes);
            await _context.SaveChangesAsync();

            return Ok(customAttributes);
        }

        private bool CustomAttributesExists(int id)
        {
            return _context.CustomAttributes.Any(e => e.Id == id);
        }
    }
}
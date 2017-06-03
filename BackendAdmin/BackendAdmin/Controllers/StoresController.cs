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
    [Route("api/Stores")]
    public class StoresController : Controller
    {
        private readonly SStoreContext _context;

        public StoresController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/Stores/All
        [HttpGet("All")]
        public IEnumerable<Stores> GetStores()
        {
            return _context.Stores;
        }

        // GET: api/Stores?page=1
        [HttpGet]
        public async Task<PaginatedList<Stores>> GetStores(int page = 1, int size = 3)
        {
            var source = _context.Stores
                .Include(store => store.Manager);
            return await PaginatedList<Stores>.CreateAsync(source, page, size);
        }

        // GET: api/Stores/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStores([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stores = await _context.Stores
                .Include(store => store.Manager)
                .SingleOrDefaultAsync(m => m.Id == id);

            if (stores == null)
            {
                return NotFound();
            }

            return Ok(stores);
        }

        // PUT: api/Stores/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStores([FromRoute] int id, [FromBody] Stores stores)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != stores.Id)
            {
                return BadRequest();
            }

            _context.Entry(stores).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoresExists(id))
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

        // POST: api/Stores
        [HttpPost]
        public async Task<IActionResult> PostStores([FromBody] Stores stores)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Stores.Add(stores);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStores", new { id = stores.Id }, stores);
        }

        // DELETE: api/Stores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStores([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stores = await _context.Stores.SingleOrDefaultAsync(m => m.Id == id);
            if (stores == null)
            {
                return NotFound();
            }

            _context.Stores.Remove(stores);
            await _context.SaveChangesAsync();

            return Ok(stores);
        }

        private bool StoresExists(int id)
        {
            return _context.Stores.Any(e => e.Id == id);
        }
    }
}
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
    [Route("api/Reviews")]
    public class ReviewsController : Controller
    {
        private readonly SStoreContext _context;

        public ReviewsController(SStoreContext context)
        {
            _context = context;
        }       

        // GET: api/Reviews/All
        [HttpGet("All")]
        public IEnumerable<Reviews> GetReviews()
        {
            return _context.Reviews;
        }

        // GET: api/Reviews?page=1
        [HttpGet]
        public async Task<PaginatedList<Reviews>> GetReviews(int page = 1, int size = 5)
        {
            var source = _context.Reviews
                .OrderByDescending(review => review.UpdatedAt)
                .Include(review => review.Product)
                .Include(review => review.User);
            return await PaginatedList<Reviews>.CreateAsync(source, page, size);
        }

        // GET: api/Reviews/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReviews([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reviews = await _context.Reviews.SingleOrDefaultAsync(m => m.Id == id);

            if (reviews == null)
            {
                return NotFound();
            }

            return Ok(reviews);
        }

        // PUT: api/Reviews/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReviews([FromRoute] long id, [FromBody] Reviews reviews)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reviews.Id)
            {
                return BadRequest();
            }

            _context.Entry(reviews).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReviewsExists(id))
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

        // POST: api/Reviews
        [HttpPost]
        public async Task<IActionResult> PostReviews([FromBody] Reviews reviews)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Reviews.Add(reviews);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReviews", new { id = reviews.Id }, reviews);
        }

        // DELETE: api/Reviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReviews([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var reviews = await _context.Reviews.SingleOrDefaultAsync(m => m.Id == id);
            if (reviews == null)
            {
                return NotFound();
            }

            _context.Reviews.Remove(reviews);
            await _context.SaveChangesAsync();

            return Ok(reviews);
        }

        private bool ReviewsExists(long id)
        {
            return _context.Reviews.Any(e => e.Id == id);
        }
    }
}
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
    [Route("api/UserReviews")]
    public class UserReviewsController : Controller
    {
        private readonly SStoreContext _context;

        public UserReviewsController(SStoreContext context)
        {
            _context = context;
        }

        // GET: api/UserReviews
        [HttpGet]
        public IEnumerable<UserReview> GetUserReview()
        {
            return _context.UserReview;
        }

        // GET: api/UserReviews/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserReview([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userReview = await _context.UserReview.SingleOrDefaultAsync(m => m.Id == id);

            if (userReview == null)
            {
                return NotFound();
            }

            return Ok(userReview);
        }

        // PUT: api/UserReviews/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserReview([FromRoute] long id, [FromBody] UserReview userReview)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userReview.Id)
            {
                return BadRequest();
            }

            _context.Entry(userReview).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserReviewExists(id))
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

        // POST: api/UserReviews
        [HttpPost]
        public async Task<IActionResult> PostUserReview([FromBody] UserReview userReview)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.UserReview.Add(userReview);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserReview", new { id = userReview.Id }, userReview);
        }

        // DELETE: api/UserReviews/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserReview([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userReview = await _context.UserReview.SingleOrDefaultAsync(m => m.Id == id);
            if (userReview == null)
            {
                return NotFound();
            }

            _context.UserReview.Remove(userReview);
            await _context.SaveChangesAsync();

            return Ok(userReview);
        }

        private bool UserReviewExists(long id)
        {
            return _context.UserReview.Any(e => e.Id == id);
        }
    }
}
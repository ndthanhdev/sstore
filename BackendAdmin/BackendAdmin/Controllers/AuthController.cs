using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using BackendAdmin.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;

namespace BackendAdmin.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly string Issuer = "*";
        private readonly string Audience = "*";
        private readonly SigningCredentials SigningCredentials = new SigningCredentials(
                        new SymmetricSecurityKey(Encoding.ASCII.GetBytes("daxua until gank tem 15p gg")),
                        SecurityAlgorithms.HmacSha256);
        private readonly TimeSpan Validfor = TimeSpan.FromDays(30);
        private DateTime Expiration => DateTime.Now.Add(Validfor);

        private readonly SStoreContext _context;

        public AuthController(SStoreContext context)
        {
            _context = context;
        }

        // POST: api/Auth/Login
        [HttpPost("Login")]
        public async Task<object> Login([FromBody] Accounts account)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var innerAccount = await _context.Accounts.Include(m => m.User)
                .SingleOrDefaultAsync(m => m.Username == account.Username);
            if (innerAccount == null)
            {
                return NotFound();
            }
            // role < manager
            if (!BCrypt.Net.BCrypt.Verify(account.Password, innerAccount.Password) || innerAccount.Role < 1)
            {
                return Unauthorized();
            }
            return new{
                data = GenerateJwt(innerAccount)
            };
        }

        private string GenerateJwt(Accounts account)
        {
            var claims = GetClaims(account);

            var jwtToken = new JwtSecurityToken(
                Issuer,
                Audience,
                claims,
                null,
                Expiration,
                SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwtToken);

            return encodedJwt;
        }

        private List<Claim> GetClaims(Accounts account)
        {
            var claims = new List<Claim>();
            claims.Add(new Claim(ClaimTypes.Name, account.Id.ToString()));
            claims.Add(new Claim(ClaimTypes.Role, account.Role.ToString()));
            return claims;
        }
    }
}
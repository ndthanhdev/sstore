using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Accounts
    {
        public long Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Ip { get; set; }
        public long Role { get; set; }
        public long UserId { get; set; }
        public string LastLogin { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Accounts
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Ip { get; set; }
        public int Role { get; set; }
        public int UserId { get; set; }
        public DateTime LastLogin { get; set; }

        public virtual Users User { get; set; }
    }
}

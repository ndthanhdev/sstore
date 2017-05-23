using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Users
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string Dob { get; set; }
        public string Tel { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public long Gender { get; set; }
        public string Avatar { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
    }
}

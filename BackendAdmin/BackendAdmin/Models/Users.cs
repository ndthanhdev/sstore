using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Users
    {
        public Users()
        {
            Accounts = new HashSet<Accounts>();
            Reviews = new HashSet<Reviews>();
            ShoppingCarts = new HashSet<ShoppingCarts>();
            Stores = new HashSet<Stores>();
            UserReview = new HashSet<UserReview>();
        }

        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime? Dob { get; set; }
        public string Tel { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public int Gender { get; set; }
        public string Avatar { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<Accounts> Accounts { get; set; }
        public virtual ICollection<Reviews> Reviews { get; set; }
        public virtual ICollection<ShoppingCarts> ShoppingCarts { get; set; }
        public virtual ICollection<Stores> Stores { get; set; }
        public virtual ICollection<UserReview> UserReview { get; set; }
    }
}

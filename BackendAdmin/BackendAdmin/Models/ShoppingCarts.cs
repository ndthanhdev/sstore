using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ShoppingCarts
    {
        public ShoppingCarts()
        {
            Orders = new HashSet<Orders>();
            ShoppingCartDetails = new HashSet<ShoppingCartDetails>();
        }

        public int Id { get; set; }
        public bool Active { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int UserId { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
        public virtual ICollection<ShoppingCartDetails> ShoppingCartDetails { get; set; }
        public virtual Users User { get; set; }
    }
}

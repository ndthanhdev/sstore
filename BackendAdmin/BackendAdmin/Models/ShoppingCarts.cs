using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ShoppingCarts
    {
        public long Id { get; set; }
        public long Active { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public long UserId { get; set; }
    }
}

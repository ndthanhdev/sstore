using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Orders
    {
        public long Id { get; set; }
        public string Code { get; set; }
        public long? Rating { get; set; }
        public string Comment { get; set; }
        public long State { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public long ShoppingCartId { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Orders
    {
        public Orders()
        {
            Invoices = new HashSet<Invoices>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public int? Rating { get; set; }
        public string Comment { get; set; }
        public int State { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int ShoppingCartId { get; set; }

        public virtual ICollection<Invoices> Invoices { get; set; }
        public virtual ShoppingCarts ShoppingCart { get; set; }
    }
}

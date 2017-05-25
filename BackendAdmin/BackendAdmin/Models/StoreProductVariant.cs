using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class StoreProductVariant
    {
        public StoreProductVariant()
        {
            Devices = new HashSet<Devices>();
            ShoppingCartDetails = new HashSet<ShoppingCartDetails>();
        }

        public int Id { get; set; }
        public string Price { get; set; }
        public int InStock { get; set; }
        public int? StoreId { get; set; }
        public int ProductId { get; set; }
        public int? ProductVariantId { get; set; }

        public virtual ICollection<Devices> Devices { get; set; }
        public virtual ICollection<ShoppingCartDetails> ShoppingCartDetails { get; set; }
        public virtual Products Product { get; set; }
        public virtual ProductVariants ProductVariant { get; set; }
        public virtual Stores Store { get; set; }
    }
}

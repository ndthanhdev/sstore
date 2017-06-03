using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ShoppingCartDetails
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
        public string Price { get; set; }
        public int ShoppingCartId { get; set; }
        public int StoreProductVariantId { get; set; }

        public virtual ShoppingCarts ShoppingCart { get; set; }
        public virtual StoreProductVariant StoreProductVariant { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ShoppingCartDetails
    {
        public long Id { get; set; }
        public long Quantity { get; set; }
        public long ShoppingCartId { get; set; }
        public long StoreProductVariantId { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class StoreProductVariant
    {
        public long Id { get; set; }
        public string Price { get; set; }
        public long InStock { get; set; }
        public long? StoreId { get; set; }
        public long ProductId { get; set; }
        public long? ProductVariantId { get; set; }
    }
}

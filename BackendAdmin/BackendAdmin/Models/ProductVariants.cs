using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductVariants
    {
        public ProductVariants()
        {
            ProductVariationValues = new HashSet<ProductVariationValues>();
            StoreProductVariant = new HashSet<StoreProductVariant>();
        }

        public int Id { get; set; }
        public bool Default { get; set; }

        public virtual ICollection<ProductVariationValues> ProductVariationValues { get; set; }
        public virtual ICollection<StoreProductVariant> StoreProductVariant { get; set; }
    }
}

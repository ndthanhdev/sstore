using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductVariationValues
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public int ProductVariantId { get; set; }

        public virtual ProductVariants ProductVariant { get; set; }
    }
}

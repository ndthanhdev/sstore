using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypeAttributes
    {
        public ProductTypeAttributes()
        {
            ProductTypeAttributeValues = new HashSet<ProductTypeAttributeValues>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int ProductTypeId { get; set; }

        public virtual ICollection<ProductTypeAttributeValues> ProductTypeAttributeValues { get; set; }
        public virtual ProductTypes ProductType { get; set; }
    }
}

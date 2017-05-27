using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypes
    {
        public ProductTypes()
        {
            Products = new HashSet<Products>();
            ProductTypeAttributes = new HashSet<ProductTypeAttributes>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string DefaultUnit { get; set; }

        public virtual ICollection<Products> Products { get; set; }
        public virtual ICollection<ProductTypeAttributes> ProductTypeAttributes { get; set; }
    }
}

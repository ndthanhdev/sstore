using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypeAttributeValues
    {
        public int Id { get; set; }
        public string Value { get; set; }
        public int ProductId { get; set; }
        public int ProductTypeAttributeId { get; set; }

        public virtual Products Product { get; set; }
        public virtual ProductTypeAttributes ProductTypeAttribute { get; set; }
    }
}

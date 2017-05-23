using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypeAttributeValues
    {
        public long Id { get; set; }
        public string Value { get; set; }
        public long ProductId { get; set; }
        public long ProductTypeAttributeId { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypeAttributes
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public long ProductTypeId { get; set; }
    }
}

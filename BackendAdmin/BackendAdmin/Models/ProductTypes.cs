using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class ProductTypes
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string DefaultUnit { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class CustomAttributes
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public long ProductId { get; set; }
    }
}

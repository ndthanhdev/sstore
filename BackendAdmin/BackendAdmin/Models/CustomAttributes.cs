using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class CustomAttributes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
        public int ProductId { get; set; }

        public virtual Products Product { get; set; }
    }
}

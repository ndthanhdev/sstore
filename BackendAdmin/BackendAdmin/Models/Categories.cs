using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Categories
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
        public long? ParentId { get; set; }
        public long CatalogId { get; set; }
    }
}

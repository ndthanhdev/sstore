using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Categories
    {
        public Categories()
        {
            Products = new HashSet<Products>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
        public int? ParentId { get; set; }
        public int CatalogId { get; set; }

        public virtual ICollection<Products> Products { get; set; }
        public virtual Catalogs Catalog { get; set; }
        public virtual Categories Parent { get; set; }
        public virtual ICollection<Categories> InverseParent { get; set; }
    }
}

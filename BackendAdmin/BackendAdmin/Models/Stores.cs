using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Stores
    {
        public Stores()
        {
            StoreProductVariant = new HashSet<StoreProductVariant>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public bool Primary { get; set; }
        public int ManagerId { get; set; }

        public virtual ICollection<StoreProductVariant> StoreProductVariant { get; set; }
        public virtual Users Manager { get; set; }
    }
}

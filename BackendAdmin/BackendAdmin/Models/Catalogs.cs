using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Catalogs
    {
        public Catalogs()
        {
            Categories = new HashSet<Categories>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Categories> Categories { get; set; }
    }
}

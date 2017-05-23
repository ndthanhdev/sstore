using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Products
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public long CategoryId { get; set; }
        public long ProductTypeId { get; set; }
    }
}

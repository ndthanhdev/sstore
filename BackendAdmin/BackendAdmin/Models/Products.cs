using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Products
    {
        public Products()
        {
            CustomAttributes = new HashSet<CustomAttributes>();
            ProductTypeAttributeValues = new HashSet<ProductTypeAttributeValues>();
            Reviews = new HashSet<Reviews>();
            StoreProductVariant = new HashSet<StoreProductVariant>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int CategoryId { get; set; }
        public int ProductTypeId { get; set; }

        public virtual ICollection<CustomAttributes> CustomAttributes { get; set; }
        public virtual ICollection<ProductTypeAttributeValues> ProductTypeAttributeValues { get; set; }
        public virtual ICollection<Reviews> Reviews { get; set; }
        public virtual ICollection<StoreProductVariant> StoreProductVariant { get; set; }
        public virtual Categories Category { get; set; }
        public virtual ProductTypes ProductType { get; set; }
    }
}

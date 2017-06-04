using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Devices
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StoreProductVariantId { get; set; }

        public virtual StoreProductVariant StoreProductVariant { get; set; }
    }
}

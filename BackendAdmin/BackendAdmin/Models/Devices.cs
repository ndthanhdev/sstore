using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Devices
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string MacAddress { get; set; }
        public long StoreId { get; set; }
    }
}

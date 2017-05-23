using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Stores
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
        public long Primary { get; set; }
        public long ManagerId { get; set; }
    }
}

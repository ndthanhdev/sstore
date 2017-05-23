using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Migrations
    {
        public long Id { get; set; }
        public string Migration { get; set; }
        public long Batch { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Invoices
    {
        public long Id { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
        public long OrderId { get; set; }
    }
}

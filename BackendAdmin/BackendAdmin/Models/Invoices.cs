using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Invoices
    {
        public int Id { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int OrderId { get; set; }

        public virtual Orders Order { get; set; }
    }
}

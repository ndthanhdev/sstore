using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Reviews
    {
        public long Id { get; set; }
        public string Content { get; set; }
        public long Rating { get; set; }
        public long UserId { get; set; }
        public long ProductId { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class UserReview
    {
        public int Id { get; set; }
        public bool Liked { get; set; }
        public int UserId { get; set; }
        public int ReviewId { get; set; }

        public virtual Reviews Review { get; set; }
        public virtual Users User { get; set; }
    }
}

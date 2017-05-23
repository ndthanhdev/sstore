using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class UserReview
    {
        public long Id { get; set; }
        public long Liked { get; set; }
        public long UserId { get; set; }
        public long ReviewId { get; set; }
    }
}

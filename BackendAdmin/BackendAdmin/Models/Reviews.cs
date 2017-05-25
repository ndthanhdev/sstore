using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Reviews
    {
        public Reviews()
        {
            UserReview = new HashSet<UserReview>();
        }

        public int Id { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public virtual ICollection<UserReview> UserReview { get; set; }
        public virtual Products Product { get; set; }
        public virtual Users User { get; set; }
    }
}

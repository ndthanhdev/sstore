using System;
using System.Collections.Generic;

namespace BackendAdmin.Models
{
    public partial class Configurations
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Value { get; set; }
    }
}

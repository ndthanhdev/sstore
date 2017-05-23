using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BackendAdmin.Models
{
    public partial class SStoreContext : DbContext
    {
        public virtual DbSet<Accounts> Accounts { get; set; }
        public virtual DbSet<Catalogs> Catalogs { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Configurations> Configurations { get; set; }
        public virtual DbSet<CustomAttributes> CustomAttributes { get; set; }
        public virtual DbSet<Devices> Devices { get; set; }
        public virtual DbSet<Invoices> Invoices { get; set; }
        public virtual DbSet<Migrations> Migrations { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<ProductTypeAttributeValues> ProductTypeAttributeValues { get; set; }
        public virtual DbSet<ProductTypeAttributes> ProductTypeAttributes { get; set; }
        public virtual DbSet<ProductTypes> ProductTypes { get; set; }
        public virtual DbSet<ProductVariants> ProductVariants { get; set; }
        public virtual DbSet<ProductVariationValues> ProductVariationValues { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Reviews> Reviews { get; set; }
        public virtual DbSet<ShoppingCartDetails> ShoppingCartDetails { get; set; }
        public virtual DbSet<ShoppingCarts> ShoppingCarts { get; set; }
        public virtual DbSet<StoreProductVariant> StoreProductVariant { get; set; }
        public virtual DbSet<Stores> Stores { get; set; }
        public virtual DbSet<UserReview> UserReview { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\duyth\Documents\GitHub\sstore\BackendAdmin\BackendAdmin\wwwroot\db.db");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Accounts>(entity =>
            {
                entity.ToTable("accounts");

                entity.HasIndex(e => e.Ip)
                    .HasName("accounts_ip_unique")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("accounts_username_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Ip)
                    .IsRequired()
                    .HasColumnName("IP")
                    .HasColumnType("varchar");

                entity.Property(e => e.LastLogin)
                    .IsRequired()
                    .HasColumnName("last_login")
                    .HasColumnType("datetime");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasColumnType("varchar");

                entity.Property(e => e.Role)
                    .HasColumnName("role")
                    .HasColumnType("integer");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<Catalogs>(entity =>
            {
                entity.ToTable("catalogs");

                entity.HasIndex(e => e.Name)
                    .HasName("catalogs_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("varchar");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<Categories>(entity =>
            {
                entity.ToTable("categories");

                entity.HasIndex(e => e.Name)
                    .HasName("categories_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.CatalogId)
                    .HasColumnName("catalog_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("varchar");

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasColumnType("varchar");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.ParentId)
                    .HasColumnName("parent_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<Configurations>(entity =>
            {
                entity.ToTable("configurations");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Key)
                    .IsRequired()
                    .HasColumnName("key")
                    .HasColumnType("varchar");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<CustomAttributes>(entity =>
            {
                entity.ToTable("custom_attributes");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<Devices>(entity =>
            {
                entity.ToTable("devices");

                entity.HasIndex(e => e.MacAddress)
                    .HasName("devices_mac_address_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.MacAddress)
                    .IsRequired()
                    .HasColumnName("mac_address")
                    .HasColumnType("varchar");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.StoreId)
                    .HasColumnName("store_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<Invoices>(entity =>
            {
                entity.ToTable("invoices");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.OrderId)
                    .HasColumnName("order_id")
                    .HasColumnType("integer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Migrations>(entity =>
            {
                entity.ToTable("migrations");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Batch)
                    .HasColumnName("batch")
                    .HasColumnType("integer");

                entity.Property(e => e.Migration)
                    .IsRequired()
                    .HasColumnName("migration")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.ToTable("orders");

                entity.HasIndex(e => e.Code)
                    .HasName("orders_code_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasColumnType("varchar");

                entity.Property(e => e.Comment)
                    .HasColumnName("comment")
                    .HasColumnType("varchar");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.Rating)
                    .HasColumnName("rating")
                    .HasColumnType("integer");

                entity.Property(e => e.ShoppingCartId)
                    .HasColumnName("shopping_cart_id")
                    .HasColumnType("integer");

                entity.Property(e => e.State)
                    .HasColumnName("state")
                    .HasColumnType("integer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<ProductTypeAttributeValues>(entity =>
            {
                entity.ToTable("product_type_attribute_values");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("integer");

                entity.Property(e => e.ProductTypeAttributeId)
                    .HasColumnName("product_type_attribute_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<ProductTypeAttributes>(entity =>
            {
                entity.ToTable("product_type_attributes");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.ProductTypeId)
                    .HasColumnName("product_type_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<ProductTypes>(entity =>
            {
                entity.ToTable("product_types");

                entity.HasIndex(e => e.Name)
                    .HasName("product_types_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.DefaultUnit)
                    .IsRequired()
                    .HasColumnName("default_unit")
                    .HasColumnType("varchar");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<ProductVariants>(entity =>
            {
                entity.ToTable("product_variants");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Default)
                    .HasColumnName("default")
                    .HasColumnType("tinyint(1)");
            });

            modelBuilder.Entity<ProductVariationValues>(entity =>
            {
                entity.ToTable("product_variation_values");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.ProductVariantId)
                    .HasColumnName("product_variant_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.ToTable("products");

                entity.HasIndex(e => e.Barcode)
                    .HasName("products_barcode_unique")
                    .IsUnique();

                entity.HasIndex(e => e.Name)
                    .HasName("products_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Barcode)
                    .IsRequired()
                    .HasColumnName("barcode")
                    .HasColumnType("varchar");

                entity.Property(e => e.CategoryId)
                    .HasColumnName("category_id")
                    .HasColumnType("integer");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("text");

                entity.Property(e => e.ImgUrl)
                    .HasColumnName("img_url")
                    .HasColumnType("varchar");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.ProductTypeId)
                    .HasColumnName("product_type_id")
                    .HasColumnType("integer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Reviews>(entity =>
            {
                entity.ToTable("reviews");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasColumnName("content")
                    .HasColumnType("text");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Rating)
                    .HasColumnName("rating")
                    .HasColumnType("integer");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<ShoppingCartDetails>(entity =>
            {
                entity.ToTable("shopping_cart_details");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Quantity)
                    .HasColumnName("quantity")
                    .HasColumnType("integer");

                entity.Property(e => e.ShoppingCartId)
                    .HasColumnName("shopping_cart_id")
                    .HasColumnType("integer");

                entity.Property(e => e.StoreProductVariantId)
                    .HasColumnName("store_product_variant_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<ShoppingCarts>(entity =>
            {
                entity.ToTable("shopping_carts");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("'1'");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<StoreProductVariant>(entity =>
            {
                entity.ToTable("store_product_variant");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.InStock)
                    .HasColumnName("in_stock")
                    .HasColumnType("integer");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasColumnType("varchar");

                entity.Property(e => e.ProductId)
                    .HasColumnName("product_id")
                    .HasColumnType("integer");

                entity.Property(e => e.ProductVariantId)
                    .HasColumnName("product_variant_id")
                    .HasColumnType("integer");

                entity.Property(e => e.StoreId)
                    .HasColumnName("store_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.ToTable("stores");

                entity.HasIndex(e => e.Name)
                    .HasName("stores_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasColumnType("varchar");

                entity.Property(e => e.Latitude)
                    .IsRequired()
                    .HasColumnName("latitude")
                    .HasColumnType("varchar");

                entity.Property(e => e.Longitude)
                    .IsRequired()
                    .HasColumnName("longitude")
                    .HasColumnType("varchar");

                entity.Property(e => e.ManagerId)
                    .HasColumnName("manager_id")
                    .HasColumnType("integer");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar");

                entity.Property(e => e.Primary)
                    .HasColumnName("primary")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("'0'");
            });

            modelBuilder.Entity<UserReview>(entity =>
            {
                entity.ToTable("user_review");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Liked)
                    .HasColumnName("liked")
                    .HasColumnType("tinyint(1)")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.ReviewId)
                    .HasColumnName("review_id")
                    .HasColumnType("integer");

                entity.Property(e => e.UserId)
                    .HasColumnName("user_id")
                    .HasColumnType("integer");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.Email)
                    .HasName("users_email_unique")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("integer");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasColumnType("varchar");

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasColumnName("avatar")
                    .HasColumnType("varchar");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasColumnType("datetime");

                entity.Property(e => e.Dob)
                    .HasColumnName("dob")
                    .HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasColumnType("varchar");

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("full_name")
                    .HasColumnType("varchar");

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasColumnType("integer");

                entity.Property(e => e.Tel)
                    .HasColumnName("tel")
                    .HasColumnType("varchar");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasColumnType("datetime");
            });
        }
    }
}
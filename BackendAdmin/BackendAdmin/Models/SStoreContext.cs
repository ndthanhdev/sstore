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
            optionsBuilder.UseNpgsql(@"Server=localhost;Port=5432;Database=default;User Id=default;Password=secret;");
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

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Ip)
                    .IsRequired()
                    .HasColumnName("IP")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.LastLogin).HasColumnName("last_login");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Role).HasColumnName("role");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("accounts_user_id_foreign");
            });

            modelBuilder.Entity<Catalogs>(entity =>
            {
                entity.ToTable("catalogs");

                entity.HasIndex(e => e.Name)
                    .HasName("catalogs_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Categories>(entity =>
            {
                entity.ToTable("categories");

                entity.HasIndex(e => e.Name)
                    .HasName("categories_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CatalogId).HasColumnName("catalog_id");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Icon)
                    .HasColumnName("icon")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ParentId).HasColumnName("parent_id");

                entity.HasOne(d => d.Catalog)
                    .WithMany(p => p.Categories)
                    .HasForeignKey(d => d.CatalogId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("categories_catalog_id_foreign");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("categories_parent_id_foreign");
            });

            modelBuilder.Entity<Configurations>(entity =>
            {
                entity.ToTable("configurations");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Key)
                    .IsRequired()
                    .HasColumnName("key")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<CustomAttributes>(entity =>
            {
                entity.ToTable("custom_attributes");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.CustomAttributes)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("custom_attributes_product_id_foreign");
            });

            modelBuilder.Entity<Devices>(entity =>
            {
                entity.ToTable("devices");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.StoreProductVariantId).HasColumnName("store_product_variant_id");

                entity.HasOne(d => d.StoreProductVariant)
                    .WithMany(p => p.Devices)
                    .HasForeignKey(d => d.StoreProductVariantId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("devices_store_product_variant_id_foreign");
            });

            modelBuilder.Entity<Invoices>(entity =>
            {
                entity.ToTable("invoices");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.Invoices)
                    .HasForeignKey(d => d.OrderId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("invoices_order_id_foreign");
            });

            modelBuilder.Entity<Migrations>(entity =>
            {
                entity.ToTable("migrations");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Batch).HasColumnName("batch");

                entity.Property(e => e.Migration)
                    .IsRequired()
                    .HasColumnName("migration")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.ToTable("orders");

                entity.HasIndex(e => e.Code)
                    .HasName("orders_code_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Code)
                    .IsRequired()
                    .HasColumnName("code")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Comment)
                    .HasColumnName("comment")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.ShoppingCartId).HasColumnName("shopping_cart_id");

                entity.Property(e => e.State).HasColumnName("state");

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");

                entity.HasOne(d => d.ShoppingCart)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ShoppingCartId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("orders_shopping_cart_id_foreign");
            });

            modelBuilder.Entity<ProductTypeAttributeValues>(entity =>
            {
                entity.ToTable("product_type_attribute_values");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.ProductTypeAttributeId).HasColumnName("product_type_attribute_id");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.ProductTypeAttributeValues)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("product_type_attribute_values_product_id_foreign");

                entity.HasOne(d => d.ProductTypeAttribute)
                    .WithMany(p => p.ProductTypeAttributeValues)
                    .HasForeignKey(d => d.ProductTypeAttributeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("product_type_attribute_values_product_type_attribute_id_foreign");
            });

            modelBuilder.Entity<ProductTypeAttributes>(entity =>
            {
                entity.ToTable("product_type_attributes");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductTypeId).HasColumnName("product_type_id");

                entity.HasOne(d => d.ProductType)
                    .WithMany(p => p.ProductTypeAttributes)
                    .HasForeignKey(d => d.ProductTypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("product_type_attributes_product_type_id_foreign");
            });

            modelBuilder.Entity<ProductTypes>(entity =>
            {
                entity.ToTable("product_types");

                entity.HasIndex(e => e.Name)
                    .HasName("product_types_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DefaultUnit)
                    .IsRequired()
                    .HasColumnName("default_unit")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<ProductVariants>(entity =>
            {
                entity.ToTable("product_variants");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Default).HasColumnName("default");
            });

            modelBuilder.Entity<ProductVariationValues>(entity =>
            {
                entity.ToTable("product_variation_values");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductVariantId).HasColumnName("product_variant_id");

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasColumnName("value")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.HasOne(d => d.ProductVariant)
                    .WithMany(p => p.ProductVariationValues)
                    .HasForeignKey(d => d.ProductVariantId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("product_variation_values_product_variant_id_foreign");
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

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Barcode)
                    .IsRequired()
                    .HasColumnName("barcode")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.ImgUrl)
                    .HasColumnName("img_url")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductTypeId).HasColumnName("product_type_id");

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("products_category_id_foreign");

                entity.HasOne(d => d.ProductType)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.ProductTypeId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("products_product_type_id_foreign");
            });

            modelBuilder.Entity<Reviews>(entity =>
            {
                entity.ToTable("reviews");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasColumnName("content");

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("reviews_product_id_foreign");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Reviews)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("reviews_user_id_foreign");
            });

            modelBuilder.Entity<ShoppingCartDetails>(entity =>
            {
                entity.ToTable("shopping_cart_details");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.ShoppingCartId).HasColumnName("shopping_cart_id");

                entity.Property(e => e.StoreProductVariantId).HasColumnName("store_product_variant_id");

                entity.HasOne(d => d.ShoppingCart)
                    .WithMany(p => p.ShoppingCartDetails)
                    .HasForeignKey(d => d.ShoppingCartId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("shopping_cart_details_shopping_cart_id_foreign");

                entity.HasOne(d => d.StoreProductVariant)
                    .WithMany(p => p.ShoppingCartDetails)
                    .HasForeignKey(d => d.StoreProductVariantId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("shopping_cart_details_store_product_variant_id_foreign");
            });

            modelBuilder.Entity<ShoppingCarts>(entity =>
            {
                entity.ToTable("shopping_carts");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasDefaultValueSql("true");

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ShoppingCarts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("shopping_carts_user_id_foreign");
            });

            modelBuilder.Entity<StoreProductVariant>(entity =>
            {
                entity.ToTable("store_product_variant");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InStock).HasColumnName("in_stock");

                entity.Property(e => e.Price)
                    .IsRequired()
                    .HasColumnName("price")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.ProductVariantId).HasColumnName("product_variant_id");

                entity.Property(e => e.StoreId).HasColumnName("store_id");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.StoreProductVariant)
                    .HasForeignKey(d => d.ProductId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("store_product_variant_product_id_foreign");

                entity.HasOne(d => d.ProductVariant)
                    .WithMany(p => p.StoreProductVariant)
                    .HasForeignKey(d => d.ProductVariantId)
                    .HasConstraintName("store_product_variant_product_variant_id_foreign");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.StoreProductVariant)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("store_product_variant_store_id_foreign");
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.ToTable("stores");

                entity.HasIndex(e => e.Name)
                    .HasName("stores_name_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Latitude)
                    .IsRequired()
                    .HasColumnName("latitude")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Longitude)
                    .IsRequired()
                    .HasColumnName("longitude")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.ManagerId).HasColumnName("manager_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Primary)
                    .HasColumnName("primary")
                    .HasDefaultValueSql("false");

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.Stores)
                    .HasForeignKey(d => d.ManagerId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("stores_manager_id_foreign");
            });

            modelBuilder.Entity<UserReview>(entity =>
            {
                entity.ToTable("user_review");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Liked)
                    .HasColumnName("liked")
                    .HasDefaultValueSql("false");

                entity.Property(e => e.ReviewId).HasColumnName("review_id");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Review)
                    .WithMany(p => p.UserReview)
                    .HasForeignKey(d => d.ReviewId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("user_review_review_id_foreign");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserReview)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("user_review_user_id_foreign");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.HasIndex(e => e.Email)
                    .HasName("users_email_unique")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Avatar)
                    .IsRequired()
                    .HasColumnName("avatar")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedAt).HasColumnName("created_at");

                entity.Property(e => e.Dob)
                    .HasColumnName("dob")
                    .HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.FullName)
                    .IsRequired()
                    .HasColumnName("full_name")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.Gender).HasColumnName("gender");

                entity.Property(e => e.Tel)
                    .HasColumnName("tel")
                    .HasColumnType("varchar")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedAt).HasColumnName("updated_at");
            });
        }
    }
}
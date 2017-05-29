/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v10.6.6324.28497 (NJsonSchema v8.33.6323.36213) (http://NSwag.org)
// </auto-generated>
//----------------------


export interface Orders {
  id?: number | null;
  code?: string | null;
  rating?: number | null;
  comment?: string | null;
  address?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  tel?: string | null;
  state?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  shoppingCartId?: number | null;
  invoices?: Invoices[] | null;
  shoppingCart?: ShoppingCarts | null;
}

export interface Invoices {
  id?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  orderId?: number | null;
  order?: Orders | null;
}

export interface ShoppingCarts {
  id?: number | null;
  active?: boolean | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  userId?: number | null;
  orders?: Orders[] | null;
  shoppingCartDetails?: ShoppingCartDetails[] | null;
  user?: Users | null;
}

export interface ShoppingCartDetails {
  id?: number | null;
  quantity?: number | null;
  price?: string | null;
  shoppingCartId?: number | null;
  storeProductVariantId?: number | null;
  shoppingCart?: ShoppingCarts | null;
  storeProductVariant?: StoreProductVariant | null;
}

export interface Users {
  id?: number | null;
  fullName?: string | null;
  dob?: Date | null;
  tel?: string | null;
  address?: string | null;
  email?: string | null;
  gender?: number | null;
  avatar?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  accounts?: Accounts[] | null;
  reviews?: Reviews[] | null;
  shoppingCarts?: ShoppingCarts[] | null;
  stores?: Stores[] | null;
  userReview?: UserReview[] | null;
}

export interface StoreProductVariant {
  id?: number | null;
  price?: string | null;
  inStock?: number | null;
  storeId?: number | null;
  productVariantId?: number | null;
  devices?: Devices[] | null;
  shoppingCartDetails?: ShoppingCartDetails[] | null;
  productVariant?: ProductVariants | null;
  store?: Stores | null;
}

export interface Accounts {
  id?: number | null;
  username?: string | null;
  password?: string | null;
  ip?: string | null;
  role?: number | null;
  userId?: number | null;
  lastLogin?: Date | null;
  user?: Users | null;
}

export interface Reviews {
  id?: number | null;
  content?: string | null;
  rating?: number | null;
  userId?: number | null;
  productId?: number | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  userReview?: UserReview[] | null;
  product?: Products | null;
  user?: Users | null;
}

export interface Stores {
  id?: number | null;
  name?: string | null;
  address?: string | null;
  longitude?: string | null;
  latitude?: string | null;
  primary?: boolean | null;
  managerId?: number | null;
  storeProductVariant?: StoreProductVariant[] | null;
  manager?: Users | null;
}

export interface UserReview {
  id?: number | null;
  liked?: boolean | null;
  userId?: number | null;
  reviewId?: number | null;
  review?: Reviews | null;
  user?: Users | null;
}

export interface Devices {
  id?: number | null;
  name?: string | null;
  storeProductVariantId?: number | null;
  storeProductVariant?: StoreProductVariant | null;
}

export interface ProductVariants {
  id?: number | null;
  default?: boolean | null;
  productId?: number | null;
  productVariationValues?: ProductVariationValues[] | null;
  storeProductVariant?: StoreProductVariant[] | null;
  product?: Products | null;
}

export interface Products {
  id?: number | null;
  name?: string | null;
  barcode?: string | null;
  description?: string | null;
  imgUrl?: string | null;
  createdAt?: Date | null;
  updatedAt?: Date | null;
  categoryId?: number | null;
  productTypeId?: number | null;
  customAttributes?: CustomAttributes[] | null;
  productTypeAttributeValues?: ProductTypeAttributeValues[] | null;
  productVariants?: ProductVariants[] | null;
  reviews?: Reviews[] | null;
  category?: Categories | null;
  productType?: ProductTypes | null;
}

export interface ProductVariationValues {
  id?: number | null;
  name?: string | null;
  value?: string | null;
  productVariantId?: number | null;
  productVariant?: ProductVariants | null;
}

export interface CustomAttributes {
  id?: number | null;
  name?: string | null;
  value?: string | null;
  productId?: number | null;
  product?: Products | null;
}

export interface ProductTypeAttributeValues {
  id?: number | null;
  value?: string | null;
  productId?: number | null;
  productTypeAttributeId?: number | null;
  product?: Products | null;
  productTypeAttribute?: ProductTypeAttributes | null;
}

export interface Categories {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  icon?: string | null;
  parentId?: number | null;
  catalogId?: number | null;
  products?: Products[] | null;
  catalog?: Catalogs | null;
  parent?: Categories | null;
  inverseParent?: Categories[] | null;
}

export interface ProductTypes {
  id?: number | null;
  name?: string | null;
  defaultUnit?: string | null;
  products?: Products[] | null;
  productTypeAttributes?: ProductTypeAttributes[] | null;
}

export interface ProductTypeAttributes {
  id?: number | null;
  name?: string | null;
  productTypeId?: number | null;
  productTypeAttributeValues?: ProductTypeAttributeValues[] | null;
  productType?: ProductTypes | null;
}

export interface Catalogs {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  categories?: Categories[] | null;
}

export interface PaginatedListOfProducts {
  pageIndex?: number | null;
  totalPages?: number | null;
  count?: number | null;
  readonly hasPreviousPage?: boolean | null;
  readonly hasNextPage?: boolean | null;
  data?: Products[] | null;
}

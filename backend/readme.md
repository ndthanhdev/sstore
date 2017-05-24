# SSTORE API DOCUMENTATION
###### VERSION 0.0.1
## I. REVISION HISTORY
| Revision | Created Date |                   Description                  |
| :------: | :----------: | :---------------------------------------------:|
| 0.0.1  | 28/4/2017    | Add entities |
| 0.0.2  | 1/5/2017    | Update entities to match with ERD v1.2.2 |
| 0.0.3  | 24/5/2017    | Update entities to match with ERD v1.2.6 |

## II. ENTITIES

![](ERD_v1.2.6.png?raw=true)

### Enums
| Name |     Enum list     |                   Description                        |
| :------------: | :---------- | :--------------------------------------------------- |
|Gender| 0 - Male <br> 1 - Female <br> 2 - Others|[User](#user)'s gender|
|Role| 0 - Guest (Anonymous User) <br> 1 - Member <br> 2 - Store Manager <br> 3 - Admin| [Account](#account)'s role|
|State| 0 - Processing <br> 1 - Delivering <br> 2 - Done| [Order](Order)'s state|


### Configuration

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| key | string | key of configuration| @NotNull |
| value | string | value of configuration| @NotNull |

### Account

__Relationships:__

| Entity | Relationship | Description |
| :------------: | :----------: |:---------- |
|[User](#user)|One To One| An Account belonged with _01_ User |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| username | string | Username of account| @Unique, @NotNull |
| password | string | Hashed password (Bcrypt)| @NotNull |
| IP | string | User's last logged in IP | @NotNull, @IPv4 |
| last_login | date | Last time when user login | |
| role | [Role](#enums) | Account's role | @NotNull |


### User

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Account](#account)|One To One| A User has _01_ Account |
|[Store](#store)|One To One| A Manager manages _01_ Store |
|[Review](#review)|One To Many| A User can write _many_ Reviews |
|[Shopping Cart](#shopping-cart)|One To Many| A User can have _many_ Shopping cart. |
|[Invoice](#invoice)|One To Many| A User can have _many_ Invoice. |
|[Review](#review)|Many To Many| A User can upvote/downvote _many_ Reviews. Pivot: [User Review](#user-review-pivot) |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| full_name | string | User's full name | @NotNull |
| dob | date | User's day of birth | @NotNull |
| tel | string | User's phone number | @NotNull |
| address | string | User's address| @NotNull |
| email | string | User's email| @NotNull, @Unique |
| gender | [Gender](#enums) | User's gender| @NotNull|
| created_at | date | Time when user's created | @NotNull |
| updated_at | date | Time when user's last updated| @NotNull |
| avatar | string | Link to User's avatar | @NotNull |

### Store

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[User](#user)| One To One | A Store is managed by _01_ Store Manager |
|[Product](#product)| Many To Many | A Store has their own Products. Pivot: [Store Product Variant](#store-product-variant-pivot)|
|[Product Variant](#product-variant)| Many To Many | A Store has their own Product Variant, each Product Variant has its own price and in_stock. Pivot: [Store Product Variant](#store-product-variant-pivot)|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Store's name | @NotNull, @Unique |
| address | string | Store's address |
| latitude | string | Store's latitude | @NotNull |
| longitude | string | Store's longitude | @NotNull |
| primary | boolean | Marks store as primary | @NotNull |

### Device

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Store Product Variant](#store-product-variant-pivot)| One To One | A Device manage a product has specified variant in a store |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Device's name | @NotNull|


### Store Product Variant (Pivot)

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Device](#device)| One To One | A Product with specified variant in a store is managed by a device |
|[Product Variant](#product-variant)| Many To One | A Product in Store has *at lease 01* Product Variant |
|[Store](#store)| Many To One | A Product can be belonged with _at lease 01_ Store  |
|[Product](#product)| Many To One | A Store have _at lease 01_ Products |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| price | number | A Product (with variant) in Store has it own price | @NotNull|
| in_stock | number | A Product (with variant) in Store has it own in_stock amount |@NotNull|

### Product Variant

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product Variation Value](#product-variation-value)| One To Many | A Product Variant has *at lease 01* Product Variation Values|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| default | boolean | Is this the default Variant of Product? | @NotNull, @Default(false)|

 *E.g: A Product "vinamilk"(Milk) in "store 1" has 5 Product Variants, one of those is default Variant:* 

### Product Variation Value

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product Variant](#product-variant)| Many To One | a Product Variation Value belonged to _01_ Product Variant.|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Product Variation Value's name | @NotNull|
| value | string | Product Variation Value's vallues |@NotNull|

  *E.g: A Product "vinamilk"(Milk) in "store 1" has 5 Product Variants, one of those is default Product Variant. That Product Variant has has 4 unit in stock with price 40$/each and has Product Variation set:*   
    ```
    [
        {
            name: 'volume', 
            value: '350ML'
        },
        {
            name: 'taste', 
            value: 'chocolate'
        },
        ...
    ]
    ```\
 
### Product
 
__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Review](#review)| One To Many | A Product may have _many_ Reviews |
|[Custom Attribute](#custom-attribute)| One To Many | A Product may have _many_ Custom Attribute.|
|[Product Type](#product-type)| Many To One | A Product belonged with _01_ Product Type.|
|[Category](#category)| Many To One | A Product belonged with _01_ Category.|
|[Store](#store)| Many To Many | A Product may belonged with _many_ Store. Pivot: [Store Product Variant](#store-product-variant-pivot)|
|[Product Variant](#product-variant)| Many To Many | A Product has _many_ Product Variants. Pivot: [Store Product Variant](#store-product-variant-pivot)|
|[Product Type Attribute](#product-type-attribute)| Many To Many | A Product has _many_ Product Type's Attribute. Pivot: [Product Type Attribute Value](#product-type-attribute-value-pivot)|
|[Shopping Cart](#shopping-cart)| Many To Many | A Product may belonged with _many_ Shopping Cart. Pivot: [Shopping Cart Detail](#shopping-cart-detail-pivot)|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Product's name | @NotNull, @Unique|
| barcode | string | Product's barcode |@NotNull, @Unique |
| description | string | Product's description |
| img_url | string | Product's image URL | @NotNull |
| created_at | date | Product's creation time | @NotNull |
| updated_at | date | Product's last updated time | @NotNull |
 
### Catalog

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Category](#category)| One To Many | A Catalog may have _many_ Categories |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Catalog's name | @NotNull, @Unique|
| description | string | Catalog's description |


### Category

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Category](#category)| One To Many | A Category may have _many_ child Category.|
|[Product](#product)| One To Many | A Category may have _many_ Products|
|[Catalog](#catalog)| Many To One | A Category belonged with _01_ Catalog.|
|[Category](#category)| Many To One | A Category may belonged with a parent Category.|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Category's name | @NotNull, @Unique|
| description | string | Category's description |
| icon | string | Category's fontawesome icon class |


### Custom Attribute

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product](#product)| Many To One | A Custom Attribute belonged with _01_ product|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Custom Attribute's name | @NotNull|
| value | string | Custom Attribute's value| @NotNull | 

### Product Type

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product](#product)| One To Many | A Product Type has _many_ Products|
|[Product Type Attribute](#product-type-attribute)| One To Many | A Product Type may have _many_ Product Type Attribute|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Product Type's name | @NotNull|
| default_unit | string | Product Type's default unit| @NotNull |

### Product Type Attribute

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product Type](#product)| Many To One | A Product Attribute belonged with _01_ Product Type|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Product Type Attribute's name | @NotNull|

*E.g: Product Type "Book" has Product Type Attribute set:*\
    ```
        [
            {
                id: 1,
                name: 'page', 
            },
            {
                id: 2,
                name: 'cover', 
            },
            ...
        ]
    ```
   
### Product Type Attribute Value (Pivot)

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product](#product)| Many To One | A Product Type Attribute Value can belonged with _01_ Product|
|[Product Type Attribute](#product-type-attribute)| Many To One | A Product Type Attribute Value belonged with _01_ Product Type Attribute|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| value | string | Product Type Attribute's value | @NotNull|

*E.g: Product Type "Book" has Product Type Attribute set:*\
    ```
    [
        {
            id: 1,
            name: 'page', 
        },
        {
            id: 2,
            name: 'cover', 
        },
        ...
    ]
    ```\
Product "sample book 1" belonged with "Book" has Product Type Attribute Value set:\
    ```
    [
        {
            product_type_attribute_id: 1 (page),
            value: 120, 
        },
        {
            product_type_attribute_id: 2 (cover),
            value: 'hardcover'', 
        },
        ...
    ]
    ```

### Shopping Cart

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Oder](#order)| One To One | A Shopping Cart can become _01_ Order |
|[User](#user)| Many To One | A Shopping Cart belonged with _01_ User |
|[Product](#product)| Many To Many | A Shopping Cart has _at lease 01_ Products. Pivot: [Shopping Cart Detail](#shopping-cart-detail-pivot)|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| active | boolean | Is this shopping cart currently active? | @NotNull|
| created_at | date | Shopping Cart's creation time| @NotNull |
| updated_at | date | Shopping Cart's last updated time | @NotNull |


### Shopping Cart Detail (Pivot)

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Shopping Cart](#shopping-cart)| Many To One | A Shopping Cart Detail belonged with _01_ Shopping Cart |
|[Product](#product)| Many To One | A Shopping Cart Detail belonged with _01_ Product |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| quantity | number | number of product user put in | @NotNull|


### Order

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Shopping Cart](#shopping-cart)| One To One | An Order has _01_ Shopping Cart |
|[Invoice](#invoice)| One To One | An Order (at Done state) has _01_ Order |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| code | string | Order's code | @NotNull, @Unique|
| rating | number | Order's rating by Owned User | @NotNull|
| comment | string | Order's comment by Owned User | @NotNull|
| state | [State](#enums) | Order's current state | @NotNull|
| created_at | date | Order's creation time| @NotNull |
| updated_at | date | Order's last updated time | @NotNull |


### Invoice

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Order](#order)| One To One | An Invoice has _01_ Order |
|[User](#user)| Many To One | An Invoice belonged with _01_ User |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| created_at | date | Invoice's creation time| @NotNull |
| updated_at | date | Invoice's last updated time | @NotNull |


### Review

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product](#product)| Many To One | A Review is belonged with _01_ Product |
|[User](#user)| Many To One | A Review is written by _01_ User |
|[User](#user)| Many To Many | A Review can be upvote/downvote by _many_ User. Pivot: [User Review](#user-review-pivot) |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| content | string | Review's content| @NotNull |
| rating | number | Review's rating about product| @NotNull, @Min(1), @Max(5) |
| created_at | date | Review's creation time| @NotNull |
| updated_at | date | Review's last updated time | @NotNull |


### User Review (Pivot) 

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Review](#review)| Many To One | The upvoted/downvoted the Review |
|[User](#user)| Many To One | The user upvoted/downvoted the Review |


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| liked | boolean | Upvoted - liked = true, Downvoteed - liked = false. Null - User don't not like the review.| @NotNull |


## III. API REFERENCES

### Catalog

| Method |     URL     |                   HTTP verb                        |    Description   |        Response Code |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|:---- |
| __index__ | /catalogs | GET | Get all catalog | 200 - OK |
| __categories__ | /catalogs/{id:[0-9]+}/categories | GET | Get all Parent Category (parent_id = null) of specified Catalog | 200 - OK |
| __products__ | /catalogs/{id:[0-9]+}/products | GET | Get all products of all category belonged to specified catalog | 200 - OK |


### Category

| Method |     URL     |                   HTTP verb                        |    Description   |        Response Code |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|:---- |
| __childCategories__ | /categories/{id:[0-9]+}/categories | GET | Get all child categories of specified Category | 200 - OK |
| __products__ | /categories/{id:[0-9]+}/products | GET | Get all product belonged to specified Category | 200 - OK |


## III. API Examples

### [Catalog](#catalog-1)

- GET `/catalogs`:\
    Sample URL: `/catalogs`
      
    Sample Response:    
    ```json
    [
      {
        "id": 1,
        "name": "West Virginia",
        "description": "Harum aliquid nam quas qui animi ut molestiae."
      },
      {
        "id": 2,
        "name": "California",
        "description": "Voluptate qui autem ut dignissimos ex ratione saepe."
      }
    ]
    ```
- GET `/catalogs/{id:[0-9]+}/categories`:\
    Sample URL: `/catalogs/1/categories`
      
    Sample Response:    
    ```json
    [
      {
        "id": 6,
        "name": "Dickensmouth",
        "description": "Ut et dolores atque quo vero tempore.",
        "icon": "fa-shopping-cart",
        "parent_id": null,
        "catalog_id": 1
      },
      {
        "id": 10,
        "name": "Lemkeport",
        "description": "Non aut maxime quo in aut a quisquam aliquid.",
        "icon": "fa-shopping-cart",
        "parent_id": null,
        "catalog_id": 1
      }
    ]
    ```    

- GET `/catalogs/{id:[0-9]+}/products`:\
    Sample URL: `/catalogs/1/products`
      
    Sample Response:    
    ```json
   {
     "total": 33,
     "per_page": 6,
     "current_page": 1,
     "last_page": 6,
     "next_page_url": "http://127.0.0.1/catalogs/1/products?page=2",
     "prev_page_url": null,
     "from": 1,
     "to": 6,
     "data": [
            {
             "id": 2,
             "name": "Sporer Plains",
             "barcode": "5343006366966408",
             "description": "Odio in est dolor repellendus.",
             "img_url": "http://lorempixel.com/1000/1300/cats/?35086",
             "created_at": "2016-08-15 01:10:51",
             "updated_at": "2016-08-15 01:10:51",
             "category_id": 9,
             "product_type_id": 8,
             "reviews_1_rating_count": 1,
             "reviews_2_rating_count": 1,
             "reviews_3_rating_count": 0,
             "reviews_4_rating_count": 0,
             "reviews_5_rating_count": 0,
             "default_variant": [
               {
                 "id": 3,
                 "default": true,
                 "pivot": {
                   "product_id": 2,
                   "product_variant_id": 3,
                   "price": "308000.00",
                   "in_stock": 19,
                   "store_id": 1
                 },
                 "variation_values": [
                   {
                     "id": 9,
                     "name": "#1c602e",
                     "value": "doloremque",
                     "product_variant_id": 3
                   },
                   {
                     "id": 10,
                     "name": "#ffb723",
                     "value": "consequuntur",
                     "product_variant_id": 3
                   }]
               }
             ]
            },
        ...
        ]
    }
  
    ```    

### [Category](#category-1)

- GET `/categories/{id:[0-9]+}/categories`:\
    Sample URL: `/categories/5/categories`
      
    Sample Response:    
    ```json
   [
     {
       "id": 1,
       "name": "Skilesfurt",
       "description": "Cupiditate id dolorem quaerat vitae nihil reiciendis id.",
       "icon": "fa-shopping-cart",
       "parent_id": 5,
       "catalog_id": 1
     },
     {
       "id": 3,
       "name": "Meaganburgh",
       "description": "Odio labore officiis modi quas illum.",
       "icon": "fa-shopping-cart",
       "parent_id": 5,
       "catalog_id": 1
     }
   ]
    ```
- GET `/categories/{id:[0-9]+}/products`:\
    Sample URL: `/categories/5/products`
      
    Sample Response:    
    ```json
    {
       "id": 7,
       "name": "Schimmel Extension",
       "barcode": "5133718925232445",
       "description": "Illum inventore et recusandae harum et ut.",
       "img_url": "http://lorempixel.com/1000/1300/cats/?69767",
       "created_at": "2017-01-04 17:51:52",
       "updated_at": "2017-01-04 17:51:52",
       "category_id": 5,
       "product_type_id": 4,
       "reviews_1_rating_count": 2,
       "reviews_2_rating_count": 0,
       "reviews_3_rating_count": 0,
       "reviews_4_rating_count": 1,
       "reviews_5_rating_count": 0,
       "default_variant": [
         {
           "id": 22,
           "default": true,
           "pivot": {
             "product_id": 7,
             "product_variant_id": 22,
             "price": "588000.00",
             "in_stock": 57,
             "store_id": 1
           },
           "variation_values": [
             {
               "id": 56,
               "name": "#c79a0a",
               "value": "distinctio",
               "product_variant_id": 22
             },
             {
               "id": 57,
               "name": "#621417",
               "value": "quibusdam",
               "product_variant_id": 22
             }
           ]
         }
       ]
     },
   ...
   ]
    ```
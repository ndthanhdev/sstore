# SSTORE API DOCUMENTATION
###### VERSION 0.0.1
## I. REVISION HISTORY
| Revision | Created Date |                   Description                  |
| :------: | :----------: | :---------------------------------------------:|
| 0.0.1  | 28/4/2017    | Add entities |

## II. ENTITIES

### Enums
| Name |     Enum list     |                   Description                        |
| :------------: | :---------- | :--------------------------------------------------- |
|Gender| 0 - Male <br> 1 - Female <br> 2 - Others|User's gender|
|Role| 0 - Guest (Anonymous User) <br> 1 - Member <br> 2 - Store Manager <br> 3 - Admin| Account's role|


### Configuration

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| key | string | key of configuration| @NotNull |
| value | string | value of configuration| @NotNull |

### Account

__Relationships:__

| Entity | Relationship | Description |
| :------------: | :----------: |:---------- |
|[User](#user)|One To One| An Account belonged to _01_ User |

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

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| full_name | string | User's full name | @NotNull |
| dob | date | User's day of birth | @NotNull |
| tel | string | User's phone number | @NotNull |
| address | string | User's address| @NotNull |
| email | string | User's email| @NotNull, @Unique |
| gender | [Gender](#enums) | User's gender| @NotNull|
| created_at | date | Time when user is created| @NotNull |
| updated_at | date | Time when user is last updated| @NotNull |

### Store

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Device](#device)| One To Many | A Store has _many_ Devices |
|[Product](#product)| Many To Many | A Store has their own Products. Pivot: [Store_Product](#store-product-pivot)|
|[User](#user)| One To One | A Store is managed by _01_ Store Manager |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Store's name | @NotNull, @Unique |
| address | string | Store's address |
| latitude | string | Store's latitude | @NotNull |
| longitude | string | Store's longitude | @NotNull |

### Device

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Store](#store)| Many To One | A Device belonged to _01_ Store |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| name | string | Device's name | @NotNull|
| mac_address | string | Device's mac address |@NotNull, @Unique |


### Store Product (Pivot)

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product Variation Value](#product-variation-value)| One To Many | A Product in Store has many Variation values |
|[Store](#store)| Many To One | A Product can be belonged to _at lease 01_ Store  |
|[Product](#product)| Many To One | A Store can has _many_ Products |

__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| in_stock_default | number | Number of product (without variants) left in a store | @NotNull|
| price_default | number | Price of product (without variant) in a store |@NotNull|
| primary | boolean | Is the price of this Product on this store will be shown in online store? |@NotNull|

*Note: For each product, there's only one __primary__ Store Product record at any point of time*

### Product Variant

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Product Variation Value](#product-variation-value)| Many To One | A Product Variant belonged to _01_ Product Variation Values|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| in_stock | string | Number of products has specified variants | @NotNull|
| price | string | Price of a product has specified variants |@NotNull|

 *E.g: A Product "vinamilk"(Milk) in "store 1" has Product Variant set:* \
    ```
    [
        {
            name: 'volume', 
            value: '350ML'
        },
        {
            name: 'taste', 
            value: 'chocolate'
        }
    ]
    ```


### Product Variation Value

__Relationships:__

| Entity |     Relationship     | Description |
| :------------: | :----------: | :----------|
|[Store Product](#store-product-pivot)| Many To One | a Product Variation Value belonged to a Product in Store |
|[Product Variant](#product-variant)| One To Many | a Product Variation Value has _at lease 01_ product variants.|


__Entity References:__

| Attribute name |     Type     |                   Description                        |    Validation   |
| :------------: | :----------: | :--------------------------------------------------- |:----------------|
| in_stock | string | Number of products has specified variants | @NotNull|
| price | string | Price of a product has specified variants |@NotNull|

 *E.g: A Product "vinamilk"(Milk) in "store 1" has Product Variant set:* \
    ```
    [
        {
            name: 'volume', 
            value: '350ML'
        },
        {
            name: 'taste', 
            value: 'chocolate'
        }
    ]
    ```\
 *has 4 unit in stock with price 40$/each.*
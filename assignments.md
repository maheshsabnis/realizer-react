# Assignments

1. CReate a Shopping Cart Application based on the following needs
    - Create table in the database names products with columns as follows
        - ProductId, int, Primary Key
        - ProductName, varchar(400) not null,
        - ManufacturerName, varchar(400) not null,
        - UnitPrice int Not null,
        - ProductImageUrl1 varchar(500) 
        - ProductImageUrl2 varchar(500) 
        - ProductImageUrl3 varchar(500) 
        - ProductImageUrl4 varchar(500) 
    - ProductImage1 is http based URL, you can caopy it from 
    internet for each product 

    - Customer Table
        - CustomerId int, Primary Key
        - CustomerName varchar(300) Not null,
        - Address varchar(4000) Not null,
        - ContactNo varchar(30) Not Null,
        - EmailAddress varchar(70) Not null 
        - Password varchar(16) Not null
    - Order
        - OrderId int, Primary Key,
        - CustomerId Foreign Key refers to CustomerId from  Customer Table
        - OrderedDate DateTime Not Null
        - TotalPrice int Not Null
    - OrderDetails
        - OrderDetailId int, Identity Primary Key,
        - ProductId Foreign Key References to ProductId from Product Table  
        - Quantuty int Not null
        - LineItemCost int Not Null,
        - OrderId Foreign Key refers to OrderId from Order Table



2. Create REST APIs to Perform CRUD Operations for Aboue Tables

3. Create React Application based on following reqirements
    - Create Components for Performing CRUD Operations on Product and Customer
    - Customer Must login before Purchasing Product 
    - A Customer can place order for product based on following UX
        - Custom Search Product based on ProductName, ManufacturerName
        - Products matching with Search Criteria will be shown in table with 'Purchase' button for each product shown in list
        - When customer click on 'Purchase' button, the Purchase-details view must be loaded where Product Name, its images and UnitPrice is shows, there musrt be an empty textbox displayed where custom can enter quantity and then click on save button.
        - Once the customer click on save button a new 'Order' must be created and saved in Database
        - Customer can purchase multiple products against same Order.
        - Customer can Edit / Delete Order
        - Once the customer click on Checkout button on Order Component, the Table Must be display with each product purchased by the Customer against that Order and below the table the Total Price must be shown   